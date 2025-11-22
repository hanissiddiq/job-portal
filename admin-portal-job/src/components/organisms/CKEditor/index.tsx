import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FC, useEffect, useRef, useState } from "react";

interface CKEditorProps {
	form: any;
	name: any;
	editorLoaded?: boolean;
}

const CKEditor: FC<CKEditorProps> = ({ form, name, editorLoaded }) => {
	const editorRef = useRef<any>();
	const [isEditorReady, setIsEditorReady] = useState(false);

	useEffect(() => {
		let canceled = false;
		if (typeof window === "undefined") return;

		(async () => {
			const [{ CKEditor: CKEditorModule }, ClassicEditorModule] = await Promise.all([
				import("@ckeditor/ckeditor5-react"),
				import("@ckeditor/ckeditor5-build-classic"),
			]);

			if (canceled) return;

			editorRef.current = {
				CKEditor:
					CKEditorModule?.CKEditor ??
					CKEditorModule?.default ??
					CKEditorModule,
				ClassicEditor:
					ClassicEditorModule?.default ?? ClassicEditorModule,
			};

			setIsEditorReady(true);
		})();

		return () => {
			canceled = true;
		};
	}, []);

	const CKEditorComponent = editorRef.current?.CKEditor;
	const ClassicEditorComponent = editorRef.current?.ClassicEditor;
	const ready = (editorLoaded ?? true) && isEditorReady && CKEditorComponent && ClassicEditorComponent;

	return (
		<>
			{ready ? (
				<div>
					{/* render CKEditor component loaded dynamically */}
					<CKEditorComponent
						editor={ClassicEditorComponent}
						data={form.getValues(name)}
						onChange={(event: any, editor: any) => {
							const data = editor.getData();
							form.setValue(name, data);
						}}
					/>
					<FormField
						control={form.control}
						name={name}
						render={({ field }) => (
							<FormItem>
								<FormMessage className="mt-3" />
							</FormItem>
						)}
					/>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};

export default CKEditor;

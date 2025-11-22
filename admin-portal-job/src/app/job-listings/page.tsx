import { FC } from "react";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
    TableCaption,
} from "@/components/ui/table";
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVerticalIcon } from "lucide-react";


interface JobListingsPageProps {}

export const revalidate = 0;



const JobListingsPage: FC<JobListingsPageProps> = async ({}) => {
	

	return (
		<div>
			<div className="font-semibold text-3xl">Job Listings</div>

			<div className="mt-10">
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                        
                        {JOB_LISTING_COLUMNS.map((item: string, i: number) => (<TableHead key={item + i}>{item}</TableHead>))}
                        <TableHead>Action</TableHead>
                        
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {JOB_LISTING_DATA.map((item: any, i: number) => (
                            <TableRow key={item.role + i}>
                                <TableCell>{item.role}</TableCell>
                                <TableCell><Badge>{item.status}</Badge></TableCell>
                                <TableCell>{item.datePosted}</TableCell>
                                <TableCell>{item.dueDate}</TableCell>
                                <TableCell><Badge variant={"outline"}>{item.jobType}</Badge></TableCell>
                                <TableCell>{item.applicants}</TableCell>
                                <TableCell>{item.applicants}/{item.needs}</TableCell>
                                <TableCell>
                                    <Button size="icon" variant="outline" ><MoreVerticalIcon /></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>				
			</div>
		</div>
	);
};

export default JobListingsPage;

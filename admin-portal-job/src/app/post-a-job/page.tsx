"use client";
import React, {FC} from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { required } from 'zod/v4-mini';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { jobFormSchema } from '@/lib/form-schema';
import { Ar } from 'zod/v4/locales';
import { ArrowLeftIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from '@/components/ui/form';
import FieldInput from '@/components/organisms/FieldInput';
// import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';


interface PostJobPageProps {
}

const PostJobPage: FC<PostJobPageProps> = ({}) => {
    const form = useForm<z.infer<typeof jobFormSchema>>({
        resolver : zodResolver(jobFormSchema),
        defaultValues: {
            requiredSkills: [],
        }
    })

    const onSubmit = (val:z.infer<typeof jobFormSchema>) => {
        console.log(val);
    };

  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
        <ArrowLeftIcon className="h-7 w-7" />
        <span className="text-2xl font-semibold" onClick={() => window.history.back()}>Back to Jobs</span>
      </div>
      <div className='my-5'>
        <div className='text-lg font-semibold'>Basic Information</div>
        <div className='text-gray-400'>List of your top perk and benefits</div>
      </div>
      <Separator />
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-6 pt-6'>
                <FieldInput title='Job Title' subtitle='This is the title of the job posting'>
                    <FormField
                        control={form.control}
                        name="roles"
                        render={({ field }) => (
                            <FormItem>
                            
                            <FormControl>
                                <Input placeholder="e. g. Software Engineer" {...field} className='w-[450px]' />
                            </FormControl>
                            <FormDescription>At Least 80 characters</FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </FieldInput>
            </form>
        </Form>
    </div>
  );
}

export default PostJobPage;
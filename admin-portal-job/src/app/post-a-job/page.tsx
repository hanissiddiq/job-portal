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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JOBTYPES } from '@/constants';
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
                <FieldInput title='Type of employment' subtitle='You can select multiple type of employment'>
                    <FormField
                    control={form.control} name="jobType"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                        
                        <FormControl>
                            <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col"
                            >
                            {JOBTYPES.map((item:string, i :number)=>(
                                <FormItem key={item+1} className="flex items-center gap-3">
                                <FormControl>
                                <RadioGroupItem value={item}/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                {item}
                                </FormLabel>
                            </FormItem>
                            ))}
                           
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                </FieldInput>
                <FieldInput title='Salary Range' subtitle='Please specify the estimated salary range for the role'>
                    <div className="w-[450] flex flex-row items-center justify-between">
                       <FormField
                        control={form.control}
                        name="salaryFrom"
                        render={({ field }) => (
                            <FormItem>
                            
                            <FormControl>
                                <Input placeholder="Rp. 2800000" {...field} className='w-full' />
                            </FormControl>                            
                            <FormMessage />
                            </FormItem>
                        )}
                        /> 
                        <span className='text-center'>To</span>
                        <FormField
                        control={form.control}
                        name="salaryTo"
                        render={({ field }) => (
                            <FormItem>
                            
                            <FormControl>
                                <Input placeholder="Rp. 3600000" {...field} className='w-full' />
                            </FormControl>                            
                            <FormMessage />
                            </FormItem>
                        )}
                        /> 
                    </div>
                </FieldInput>
                <FieldInput title="Categories" subtitle='You can slect job categories'>
                    <FormField
                    control={form.control}
                    name="categoryId"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Select Job categories</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger className='w-[450px]'>
                                <SelectValue placeholder="Select Job categories" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="m@example.com">m@example.com</SelectItem>
                            <SelectItem value="m@google.com">m@google.com</SelectItem>
                            <SelectItem value="m@support.com">m@support.com</SelectItem>
                            </SelectContent>
                        </Select>
                        
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
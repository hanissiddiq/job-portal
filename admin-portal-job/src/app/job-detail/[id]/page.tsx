import {  ArrowLeftIcon} from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Applicants from '@/components/organisms/Applicants';

interface JobDetailPageProps {
  
}

const JobDetailPage: FC<JobDetailPageProps> = ({}) => {

  return (
    <div>        
        <div className="inline-flex items-center mb-5 gap-5">
            <div>
                <Link href="/job-listings">
                <ArrowLeftIcon className="w-9 h-9"/>        
                </Link>
            </div>
    
            <div>
                <div className="font-semibold text-2xl mb-1">Brand Designer</div>
                <div className="font-semibold text-md mb-1">Design - full time - 1/10 Hired</div>
            </div>
        </div>

        <Tabs defaultValue="applicants" >
            <TabsList className='mb-6'>
                <TabsTrigger value="applicants">Applicant</TabsTrigger>
                <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
            </TabsList>
            <TabsContent value="applicants">
                <Applicants/>
            </TabsContent>
            <TabsContent value="jobDetails">Change your password here.</TabsContent>
        </Tabs>


    </div>
        
    
  );
}

export default JobDetailPage;
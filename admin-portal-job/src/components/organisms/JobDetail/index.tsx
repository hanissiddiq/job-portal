
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { PartyPopperIcon } from 'lucide-react';
import React, { FC } from 'react';

interface JobDetailProps {
  
}


    const JobDetail: FC<JobDetailProps> = ({  }) => {
    return (
       <div>
            <div className="grid grid-cols-3 w-full gap-5">
                <div className="col-span-2 space-y-10">
                    <div>
                        <div className="text-3xl font-semibold">Description</div>
                        <div className="text-gray-500 mt-3">
                            <p>We are looking for a creative and experienced Brand Designer to join our team. The ideal candidate will have a strong portfolio showcasing their ability to create compelling brand identities and visual designs that resonate with target audiences. You will work closely with our marketing and product teams to develop and implement brand strategies that enhance our market presence and drive customer engagement.
                                </p> 
                        </div>
                    </div>

                    <div>
                        <div className="text-3xl font-semibold">Responsibilty</div>
                        <div className="text-gray-500 mt-3">
                            <p>
                                Develop and execute brand strategies that align with company goals and values.
- Create and maintain brand guidelines to ensure consistency across all marketing materials and channels.
- Design visual assets, including logos, packaging, advertisements, and digital content, that effectively communicate the brand message.
                            </p> 
                        </div>
                    </div>

                    <div>
                        <div className="text-3xl font-semibold">Who You Are</div>
                        <div className="text-gray-500 mt-3">
                            <p>
                                Proven experience as a Brand Designer or similar role, with a strong portfolio of work.
- Proficiency in design software such as Adobe Creative Suite (Illustrator, Photoshop, InDesign) and other relevant tools.
- Excellent understanding of branding principles, marketing strategies, and consumer psychology.
                            </p> 
                        </div>
                    </div>

                    <div>
                        <div className="text-3xl font-semibold">Nice to Have</div>
                        <div className="text-gray-500 mt-3">
                            <p>
                                Experience with motion graphics and video editing is a plus.
- Knowledge of web design and development principles.
- Familiarity with social media marketing and content creation.
                            </p> 
                        </div>
                    </div>


                </div>

                <div>
                    <div className="text-3xl font-semibold">
                        About this role
                    </div>
                    <div className="shadow p-3 text-center mt-6">
                        1 <span className='text-gray-500'>of 10 Capacity</span>
                        <Progress value={10} className="mt-2"/>
                    </div>

                    <div className="my-6 space-y-5">
                        <div className='flex justify-between'>
                            <div className="text-gray-500">Apply Before</div>
                            <div className="font-semibold">12 December 2026</div>
                        </div>
                    
                    
                        <div className='flex justify-between'>
                            <div className="text-gray-500">Job Posted On</div>
                            <div className="font-semibold">23 November 2025</div>
                        </div>
                    
                    
                        <div className='flex justify-between'>
                            <div className="text-gray-500">Job Type</div>
                            <div className="font-semibold">Full-time</div>
                        </div>
                    
                    
                        <div className='flex justify-between'>
                            <div className="text-gray-500">Salary</div>
                            <div className="font-semibold">$60,000 - $80,000 USD</div>
                        </div>
                    </div> 

                    <Separator></Separator> 
                    <div className="my-10">
                        <div className="font-3xl font-semibold mb-4">
                            Categories
                        </div>

                        <div className="space-x-5"> 
                            <Badge variant={'outline'}>Design</Badge>                           
                        </div>
                    </div>    

                    <Separator></Separator> 
                    <div className="my-10">
                        <div className="font-3xl font-semibold mb-4">
                            Required Skill
                        </div>

                        <div className="space-x-5">     
                            {["Adobe Photoshop", "Illustrator", "InDesign", "Figma", "Sketch"].map((skill, index) => (
                                <span key={skill + index} className="inline-block bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full mb-2">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>                   

                </div>
            </div>
            <Separator className="my-8"/>
            <div>
                <div className="text-3xl font-semibold mb-4">
                    Perk & Benefits
                </div>
                <div className=" text-gray-500 space-y-2">                   
                </div>
                <div className="grid grid-cols-4 gap-5 mt-5">
                    {["Health Insurance", "Remote Work", "Paid Time Off", "Retirement Plans"].map((perk, index) => (
                        <div key={perk + index} className="">
                           <PartyPopperIcon className="w-10 h-10 text-purple-500 mb-6"/>
                           <div className="text-lg text-gray-700">{perk}</div>
                           <div className="text-md text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </div>
                        </div>
                    ))}
                </div>
            </div>
       </div>
    );
};


export default JobDetail;
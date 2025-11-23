"use client";
import { Button } from '@/components/ui/button';
import { MoreVerticalIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface ButtonActionTableProps {
url: string;    
  
}

const ButtonActionTable: FC<ButtonActionTableProps> = ({url}) => {
  const router = useRouter();

  return (
    <div className="p-4">
      <Button size="icon" variant="outline" onClick={() => router.push(url)}><MoreVerticalIcon /></Button>
    </div>
  );
}

export default ButtonActionTable;
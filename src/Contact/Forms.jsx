'use client';
import { FloatingLabel } from 'flowbite-react';
import { Button, Label, TextInput } from 'flowbite-react';

export default function Component() {
  return (
    <form className="flex max-w-md w-[70%] sm:w-full mb-[100px] flex-col gap-4">
      <div className="w-full ">
        <div className="mb-2 block text-white">
          <FloatingLabel variant="standard" className="text-white" label="Email" required />
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <FloatingLabel variant="standard" className="text-white" label="Name" required />
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <FloatingLabel variant="standard" className="text-white" label="Massage" required />
        </div>
      </div>
      <Button className="bg-black text-white border border-white hover:bg-white" type="submit">
        Send
      </Button>
    </form>
  );
}

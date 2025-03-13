'use client';
import { FloatingLabel } from 'flowbite-react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function Component() {
  return (
    <form className="flex max-w-md Forms flex-col gap-4">
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
          <Label htmlFor="large" className="text-white" value="Message" />
        </div>
        <TextInput id="large" type="text" sizing="lg" required />
      </div>
      <Button className="bg-white text-black" type="submit">
        Send
      </Button>
    </form>
  );
}

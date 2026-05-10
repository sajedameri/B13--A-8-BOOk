import React from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { authClient } from "@/lib/auth-client";

const UpdataProfile = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });

    
  };

  return (
    <div>
      <Modal>
        <Button variant="secondary">Update Profile</Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">

              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <BiUser className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Update Profile</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">

                  <form onSubmit={onSubmit} className="flex flex-col gap-4">

                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>

                    <TextField className="w-full" name="image" type="text">
                      <Label>Photo URL</Label>
                      <Input placeholder="Enter your photo URL" />
                    </TextField>

                    <div className="flex gap-4">
                      <Button variant="secondary">
                        Cancel
                      </Button>

                      <Button type="submit">
                        Save
                      </Button>
                    </div>

                  </form>

                </Surface>
              </Modal.Body>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdataProfile;
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const DeleteTask = ({ task, handleDeleteTask }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>🗑</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.

              <button
                onClick={() => handleDeleteTask(task._id)}
                className="border-solid border-white border-b-2 px-4 py-1 mr-2 bg-red-500 text-white"
              >Confirm Delete
              </button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default DeleteTask
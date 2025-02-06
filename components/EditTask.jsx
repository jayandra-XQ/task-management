import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const EditTask = ({ handleEditTask, task, allusers }) => {
  const [newTask, setNewTask] = useState(task.text)
  const [newAssignedTo, setNewAssignedTo] = useState(task.assigned_to.id)
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>✎</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              <form>
                <input
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  type='text'
                  className='flex-1 p-2 rounded-lg bg-gray-700 text-white'
                />
                <label>Assigned To</label>
                <select className='flex-1 p-2 rounded-lg bg-gray-700 text-white'
                  value={newAssignedTo}
                  onChange={(e) => setNewAssignedTo(e.target.value)}
                >
                  <option key={task.assigned_to?._id} value={task.assigned_to?._id}>
                    {' '}
                    {task.assigned_to?.firstname + ' ' + task.assigned_to?.lastname}
                  </option>
                  {allusers &&
                    allusers.map(
                      (iuser) =>
                        iuser._id !== task.assigned_to?._id && (
                          <option key={iuser._id} value={iuser._id}>
                            {iuser.firstname + ' ' + iuser.lastname}
                          </option>
                        )
                    )}
                </select>

                <button
                  onClick={() => {
                    handleEditTask(task._id, newTask, newAssignedTo)
                    setOpen(false)
                  }}
                  className='bg-blue-500 p-2 mt-4 w-full rounded-lg text-white'>Update</button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default EditTask
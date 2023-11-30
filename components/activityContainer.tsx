"use client"

import React, { useState, useEffect } from "react"
import {
  getActivities,
  createActivity,
  deleteActivity,
} from "@/services/activityServices"
import {
  Container,
  Dialog,
  Form,
  Label,
  Input,
  TextArea,
  Button,
} from "@/components/styled"

const ActivityContainer = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [showDialog, setShowDialog] = useState<boolean>(false)

  useEffect(() => {
    getActivities().then((activities) => setActivities(activities))
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.activityName.value
    if (!name) return
    const description = form.description.value
    const activity = await createActivity({ name, description })
    setActivities([...activities, activity])
    setShowDialog(false)
  }

  const handleDeleteActivity = async (id: string) => {
    await deleteActivity(id)
    setActivities(activities.filter((activity) => activity.id !== id))
  }

  return (
    <Container>
      <Dialog open={showDialog}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <h1>Add Activity</h1>
          <Label htmlFor="activityName">Name</Label>
          <Input id="activityName" name="activityName" type="text" />
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" name="description" />
          <Button type="submit">Add Activity</Button>
        </Form>
      </Dialog>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <div>
              <h3>{activity.name}</h3>
              <Button
                onClick={() => handleDeleteActivity(activity.id)}
                className="remove"
              >
                x
              </Button>
            </div>
            <p>{activity.description}</p>
          </li>
        ))}
      </ul>
      <Button onClick={() => setShowDialog(true)}>Add Activity</Button>
    </Container>
  )
}

export default ActivityContainer

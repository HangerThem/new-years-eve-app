"use client"

import React, { useState, useEffect } from "react"
import { getFoods, createFood, deleteFood } from "@/services/foodServices"
import {
  Container,
  Dialog,
  Form,
  Label,
  Input,
  TextArea,
  Button,
} from "@/components/styled"

const FoodContainer = () => {
  const [foods, setFoods] = useState<Food[]>([])
  const [showDialog, setShowDialog] = useState<boolean>(false)

  useEffect(() => {
    getFoods().then((foods) => setFoods(foods))
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.foodName.value
    if (!name) return
    const description = form.description.value
    const food = await createFood({ name, description })
    setFoods([...foods, food])
    setShowDialog(false)
  }

  const handleDeleteFood = async (id: string) => {
    await deleteFood(id)
    setFoods(foods.filter((food) => food.id !== id))
  }

  return (
    <Container>
      <Dialog open={showDialog}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <h1>Add Food</h1>
          <Label htmlFor="foodName">Name</Label>
          <Input id="foodName" name="foodName" type="text" />
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" name="description" />
          <Button type="submit">Add Food</Button>
        </Form>
      </Dialog>
      <h2>Food</h2>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            <div>
              <h3>{food.name}</h3>
              <Button
                onClick={() => handleDeleteFood(food.id)}
                className="remove"
              >
                x
              </Button>
            </div>
            <p>{food.description}</p>
          </li>
        ))}
      </ul>
      <Button onClick={() => setShowDialog(true)}>Add Food</Button>
    </Container>
  )
}

export default FoodContainer

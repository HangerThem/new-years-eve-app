"use client"

import React, { useState, useEffect } from "react"
import { getDrinks, createDrink, deleteDrink } from "@/services/drinkServices"
import {
  Container,
  Dialog,
  Form,
  Label,
  Input,
  TextArea,
  Button,
} from "@/components/styled"

const DrinkContainer = () => {
  const [drinks, setDrinks] = useState<Drink[]>([])
  const [showDialog, setShowDialog] = useState<boolean>(false)

  useEffect(() => {
    getDrinks().then((drinks) => setDrinks(drinks))
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.drinkName.value
    if (!name) return
    const description = form.description.value
    const drink = await createDrink({ name, description })
    setDrinks([...drinks, drink])
    setShowDialog(false)
  }

  const handleDeleteDrink = async (id: string) => {
    await deleteDrink(id)
    setDrinks(drinks.filter((drink) => drink.id !== id))
  }

  return (
    <Container>
      <Dialog open={showDialog}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Button onClick={() => setShowDialog(false)} className="close">
            ×
          </Button>
          <h1>Add Drink</h1>
          <Label htmlFor="drinkName">Name</Label>
          <Input id="drinkName" name="drinkName" type="text" />
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" name="description" />
          <Button type="submit">Add Drink</Button>
        </Form>
      </Dialog>
      <h2>Drinks</h2>
      <ul>
        {drinks.map((drink) => (
          <li key={drink.id}>
            <div>
              <h3>{drink.name}</h3>
              <Button
                onClick={() => handleDeleteDrink(drink.id)}
                className="remove"
              >
                x
              </Button>
            </div>
            <p>{drink.description}</p>
          </li>
        ))}
      </ul>
      <Button onClick={() => setShowDialog(true)}>Add Drink</Button>
    </Container>
  )
}

export default DrinkContainer

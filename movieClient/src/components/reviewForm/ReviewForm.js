import React from 'react'
import { Button, Form } from 'react-bootstrap'

const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
  return (
    <div>
        <Form>
        <Form.Group className='mb-3' controlId='exampleForm.controlTextrea1'>
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" defaultValue={defaultValue} rows={3} />
            
        </Form.Group>
        <Button variant='outline-info' onClick={handleSubmit}>Submit</Button>
        </Form>
    </div>
  )
}

export default ReviewForm
import { Button, Radio } from 'babus-ui'
import 'babus-ui/dist/index.css'
import React from 'react'

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <Button onClick={() => {}}>Babus ui</Button>
      </div>
      <div>
        <Button variant='primaryGhost' onClick={() => {}}>
          Tailwind Setup Starter
        </Button>
      </div>
      <div className='radios'>
        <Radio id='name' name='my-radios' label='Name' />
        <Radio id='last-name' name='my-radios' label='Last Name' />
      </div>
    </div>
  )
}

export default App

import {useState} from 'react';
import Layout from 'comps/layout'
import {fetcher} from 'lib/fetch'

function handleSubmit(e) {
  e.preventDefault();
}

export default function Contact({siteSettings}) {
  const [input, setInput] = useState({})

  return (
    <Layout title='Contact' siteSettings={siteSettings}>
    <div className='container'>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Enter name'
            required
            onChange={(e) => setInput({...input, name: e.target.value})}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Enter email'
            required
            onChange={(e) => setInput({...input, email: e.target.value})}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='form-control'
            id='message'
            rows='3'
            placeholder='Enter message'
            required
            onChange={(e) => setInput({...input, message: e.target.value})}
          />
        </div>
        <button type='submit' className='btn btn-primary'>Send</button>
      </form>
    </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await fetcher('http://localhost:3000/api/settings')

  return {
    props: {
      siteSettings
    }
  }
}

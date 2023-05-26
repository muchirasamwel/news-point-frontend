import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'
import Select from 'react-select'
import { allAPInewsSources } from '../../utils/helperFns'
import { PrefObj } from '../../types/News'

type Props = {
  handleSave: (preferences: PrefObj) => void
}

const sourcesOptions: Array<{ value: string; label: string }> = [
  { value: 'New York Times News', label: 'New York Times News' },
  { value: 'Guardian News', label: 'Guardian News' },
  { value: 'vanilla', label: 'Vanilla' },
  ...allAPInewsSources
]

const categoriesOptions: Array<{ value: string; label: string }> = []
const authorsOptions: Array<{ value: string; label: string }> = []

const PreferencesForm = (props: Props) => {
  const { user } = useAuth()
  const [sources, setSources] = useState<Array<string>>([])
  const [categories, setCategories] = useState<Array<string>>([])
  const [authors, setAuthors] = useState<Array<string>>([])

  useEffect(() => {
    setSources(user?.user_preferences?.sources ?? [])
  }, [user?.user_preferences])

  return (
    <>
      <div className='col-md-4 bg-white border border-light rounded-3 p-4 shadow'>
        <div>
          <h4 className='text-center'>Select you preferences</h4>
        </div>
        <div className='my-2'>
          <Form.Label>Sources</Form.Label>
          <Select
            placeholder='Sources'
            options={sourcesOptions}
            isMulti
            value={sources.map(s => ({
              label: sourcesOptions.find(o => o.value == s)?.label,
              value: s
            }))}
            onChange={val => {
              setSources(val.map(v => v.value))
            }}
          />
        </div>
        <div className='my-2'>
          <Form.Label>Categories</Form.Label>
          <Select
            placeholder='Categories'
            options={[]}
            isMulti
            value={categories.map(s => ({
              label: categoriesOptions.find(o => o.value == s)?.label,
              value: s
            }))}
            onChange={val => {
              setCategories(val.map(v => v.value))
            }}
          />
        </div>
        <div className='my-2'>
          <Form.Label>Authors</Form.Label>
          <Select
            placeholder='Authors'
            options={[]}
            isMulti
            value={authors.map(s => ({
              label: authorsOptions.find(o => o.value == s)?.label,
              value: s
            }))}
            onChange={val => {
              setAuthors(val.map(v => v.value))
            }}
          />
        </div>
        <div className='mt-3 d-flex justify-content-between align-items-center'>
          <Button
            className=''
            variant='primary'
            type='submit'
            onClick={() => props.handleSave({ sources, categories, authors })}
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </>
  )
}

export default PreferencesForm

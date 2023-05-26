import React, { useState } from 'react'
import { Button, Dropdown, Form } from 'react-bootstrap'
import Select from 'react-select'
import FormInput from './forminput'
import moment from 'moment'
import config from '../../config'
import useNewsData from '../../hooks/useNewsData'

type Props = {}

const NewsFilter = (props: Props) => {
  const {
    filters,
    setFilters,
    sourcesOptions,
    authorsOptions,
    categoriesOptions
  } = useNewsData()

  return (
    <Dropdown style={{ marginLeft: '10px', marginRight: '10px' }}>
      <Dropdown.Toggle variant='outline-light' id='dropdown-basic'>
        Filter results
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className='px-2 w-100'>
          <div className='my-2'>
            <Form.Label>Sources</Form.Label>
            <Select
              placeholder='Sources'
              value={{ label: filters.source, value: filters.source }}
              options={sourcesOptions.map(v => ({ value: v, label: v }))}
              onChange={val => {
                setFilters(prev => ({ ...prev, source: val?.value }))
              }}
            />
          </div>
          <div className='my-2'>
            <Form.Label>Author</Form.Label>
            <Select
              placeholder='Author'
              value={{ label: filters.author, value: filters.author }}
              options={authorsOptions.map(v => ({ value: v, label: v }))}
              onChange={val => {
                setFilters(prev => ({ ...prev, author: val?.value }))
              }}
            />
          </div>
          <div className='my-2'>
            <Form.Label>Category</Form.Label>
            <Select
              placeholder='Category'
              value={{ label: filters.category, value: filters.category }}
              options={categoriesOptions.map(v => ({ value: v, label: v }))}
              onChange={val => {
                setFilters(prev => ({ ...prev, category: val?.value }))
              }}
            />
          </div>
          <div className='my-2'>
            <FormInput
              inputClass=''
              type='date'
              className='mb-2'
              controlId='dateInp'
              label='Date'
              value={
                filters?.date ? moment(filters?.date).format('yyyy-MM-DD') : ''
              }
              placeholder='Pick date'
              isInvalid={false}
              errorMessage={''}
              onChange={e => {
                const val = e.target.value
                setFilters(prev => ({
                  ...prev,
                  date: moment(val).format(config.dateFormat)
                }))
              }}
            />
          </div>
          <div className='mt-3 '>
            <Button
              className=''
              variant='secondary'
              onClick={() => {
                setFilters({})
              }}
            >
              Reset Filter
            </Button>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default NewsFilter

import React from 'react'
import PreferencesForm from '../../components/forms/PreferencesForm'
import usePreferences from '../../hooks/usePreferences'

type Props = {}

const Profile = (props: Props) => {
  const { updatePreferences } = usePreferences()
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <PreferencesForm handleSave={updatePreferences} />
    </div>
  )
}

export default Profile

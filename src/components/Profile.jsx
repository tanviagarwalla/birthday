import React from 'react'
import { Card, List } from 'semantic-ui-react'
import img from '../media/profilepix.jpeg'

const extra = (
  <List>
    <List.Item icon='marker' content='Kolkata, India' />
    <List.Item
      icon='mail'
      content={<a href='#'>swetiksheth@gmail.com</a>}
    />
    <List.Item
      icon='linkify'
      content={<a href='#'>Resume</a>}
    />
  </List>
)

const Profile = () => (
  <Card
    className="profile-card"
    image={img}
    header='Swetik Sheth'
    meta='Recruit'
    description={extra}
  />
)

export default Profile
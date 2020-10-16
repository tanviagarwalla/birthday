import React from 'react'
import { Statistic } from 'semantic-ui-react'

const items = [
  { key: 'strength', label: 'Strength', value: '78.4%' },
  { key: 'cuteness', label: 'Cuteness', value: '100%' },
]

const Stats = () => <Statistic.Group className="stats" items={items} />

export default Stats;
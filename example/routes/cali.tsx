import * as React from 'react';
import {FC} from 'react';
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { format, formatDistanceToNowStrict } from 'date-fns'
import Lozenge from '@atlaskit/lozenge';
import { GoalStatus, GoalsWrapper, UserName, CaliWrapper, ProfilePhoto, ProfileWrapper } from './cali-styled'
import { Goal as GoalType} from '../types'
import { Goal } from '../components/goal'

interface CaliProps {

}


class CaliStore {
  user = {
    name: 'zzarcon',
    dateOfBirth: new Date(1991, 8, 29),
    height: 183,
    weight: 71,
    startTrainingDate: new Date(2019, 11, 0)
  }
  goals: GoalType[] = [{
    name: 'Straddle planche',
    startDate: new Date(2021, 6, 0),
    image: '/assets/tuck_planche.png'
  }, {
    name: '10sec Front lever',
    startDate: new Date(2020, 0, 0),
    image: '/assets/fl_hold.png'
  }, {
    name: 'Front lever hold + press',
    startDate: new Date(2021, 7, 0),
    image: '/assets/fl_press.png'
  }]

  constructor() {
    makeAutoObservable(this);
  }
}

const caliStore = new CaliStore();

export const Cali: FC<CaliProps> = () => {
  const {user, goals} = caliStore;
  const startTraining = formatDistanceToNowStrict(user.startTrainingDate, {addSuffix: true, unit: 'day'});
  const goalsContent = goals.map(goal => {
    return (
      <Goal key={goal.name} goal={goal} />
    )
  })
  return (
    <CaliWrapper>
      <ProfileWrapper>
        <ProfilePhoto src={'/assets/profile_photo.jpeg'} />
        <div>
          <UserName>{user.name}</UserName>
          <div>⚖️ {user.height}cm / {user.weight}kg</div>
          <div>🐣 {format(user.dateOfBirth, 'dd/MM/yyyy')}</div>
          <div>🧱 Cali since {startTraining}</div>
        </div>
      </ProfileWrapper>
      <GoalStatus>
        <Lozenge appearance='new' isBold>
          In progress
        </Lozenge>
      </GoalStatus>
      <GoalsWrapper>
        {goalsContent}
      </GoalsWrapper>
    </CaliWrapper>
  )
}

export default observer(() => <Cali />);
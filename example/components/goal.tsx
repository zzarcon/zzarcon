import * as React from 'react';
import {FC} from 'react';
import { formatDistanceToNowStrict } from 'date-fns'
import EmojiFrequentIcon from '@atlaskit/icon/glyph/emoji/frequent';
import type {Goal as GoalType} from '../types';
import {GoalWrapper, TrainingTimeWrapper, GoalName, GoalImage} from './goal-styled';

interface GoalProps {
  goal: GoalType;
}

export const Goal: FC<GoalProps> = ({goal}) => {
  const trainingTime = formatDistanceToNowStrict(goal.startDate, {addSuffix: true, unit: 'day'});

  return (
    <GoalWrapper>
      <GoalImage src={goal.image} />
      <GoalName>{goal.name}</GoalName>
      <TrainingTimeWrapper>
        <EmojiFrequentIcon label="training time" />
        {trainingTime}
      </TrainingTimeWrapper>
    </GoalWrapper>
  )
}
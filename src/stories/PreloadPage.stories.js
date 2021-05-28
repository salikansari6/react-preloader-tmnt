import React from 'react'
import { PreloadPage } from '../components/Preloader'


export default {
    title: 'Components/PreloadPage',
    component: PreloadPage,
  }


const Template = args => <PreloadPage {...args}/>

export const Default = Template.bind({})
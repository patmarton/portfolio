import '../../../setupTest'
import React from 'react'
import {shallow, mount} from 'enzyme'
import '../SocialItem'
import SocialItem from '../SocialItem'

const item = {
    url: "test.test",
    icon: ['fab','hackerrank']
  }

  describe("property test", () => {
    it("accepts social data props", () => {
      const wrapper = shallow(<SocialItem url={item.url} icon={item.icon} />)
      expect(wrapper.props().icon).toEqual(item.icon)
    })

  })
  


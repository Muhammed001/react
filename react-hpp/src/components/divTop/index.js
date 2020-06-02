import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { InputItem, TextareaItem } from 'antd-mobile'
import './index.css'

export default class index extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render () {
    return (
      <div className="outDiv">
        <div className="content">
          <div className="user">
            <span><span style={{ color: "red", marginLeft: "5px" }}>*</span>Transfer To</span>
            <span >
              <InputItem
                placeholder="please input userInfo"
              >
                <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
              </InputItem>
            </span>
            <div class="entry1">
              <div class="entry-trangle-top">
                {/* <!--本Div只来实现三角形，无其他作用--> */}
              </div>
              Value is required!
            </div>
          </div>
          <div className="textal">
            <span><span style={{ color: "red", paddingLeft: "2px" }}>*</span>Transfer Comments</span>
            <span>
              <TextareaItem
                autoHeight
                rows={5}
              />
            </span>
            <div class="tag-top">
            Value is required!
            </div>
          </div>
        </div>

        <div class="entry">
          <div class="entry-trangle-left">
            {/* <!--本Div只来实现三角形，无其他作用--> */}
          </div>
    hello，我出生了<br />
    hello，我出生了
</div>
        <div class="entry">
          <div class="entry-trangle-right">
            {/* <!--本Div只来实现三角形，无其他作用--> */}
          </div>
    hello，我出生了<br />
    hello，我出生了
</div>
        <div class="entry">
          <div class="entry-trangle-top">
            {/* <!--本Div只来实现三角形，无其他作用--> */}
          </div>
    hello，我出生了<br />
    hello，我出生了
</div>
        <div class="entry">
          <div class="entry-trangle-bottom">
            {/* <!--本Div只来实现三角形，无其他作用--> */}
          </div>
    hello，我出生了<br />
    hello，我出生了
</div>
      </div>
    )
  }
}

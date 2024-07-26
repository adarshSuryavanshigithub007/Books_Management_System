import { Progress } from 'antd'
import React from 'react'

const ProgressComponent = ({progress}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <Progress percent={progress} />
    <div style={{ marginTop: '10px' }}>
        Loading... {progress}%
    </div>
</div>
  )
}

export default ProgressComponent
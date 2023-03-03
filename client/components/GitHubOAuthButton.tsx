import React from 'react'

const GitHubOAuthButton = () => {
  const handleClick = () => {
    window.location.assign('https://github.com/login/oauth/authorize?client_id=' + '011365883468c9993878')

  }

  return (
    <div>
      asdf
    </div>
  )
}

export default GitHubOAuthButton;
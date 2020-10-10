import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function Repo({ repos }) {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
}

Repo.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default RepoItem

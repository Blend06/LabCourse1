import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/Sparkle'><div>Sparkle</div></Link>
		<Link to='/Sparkle_1'><div>Sparkle_1</div></Link>
		<Link to='/Key'><div>Key</div></Link>
	</div>
	)
}
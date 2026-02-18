import React from 'react';
import { Title, Meta, Link } from 'react-meta-seo';

export default function SEO({ title, description, url, image }) {
	return (
		<>
			<Title>{title}</Title>
			<Meta name='description' content={description} />
			{/* OpenGraph / social */}
			{url && <Meta property='og:url' content={url} />}
			{title && <Meta property='og:title' content={title} />}
			{description && <Meta property='og:description' content={description} />}
			{image && <Meta property='og:image' content={image} />}
			{/* Optional canonical link */}
			{url && <Link rel='canonical' href={url} />}
		</>
	);
}

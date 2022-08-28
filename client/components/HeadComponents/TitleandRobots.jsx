import React from 'react'
import Head from 'next/head'
export default function TitleAndRobots({TITLE, robots}) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content={robots} />
      </Head>
    </>
  );
}

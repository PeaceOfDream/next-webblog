import React from "react"
import { Button, Htag, P, Tag } from "../components";



export default function Home():JSX.Element {
  return (
    <>
      <Htag tag="h1">texfdfdfdfdfdfdfdfdfdt</Htag>
      <Button appearance="primary" arrow="right">
        Knopka
      </Button>
      <Button appearance="ghost" arrow="down">
        Knopka
      </Button>
      <P size="s">big</P>
      <P>big</P>
      <P size="l">big</P>
		<Tag size="m">small</Tag>
		<Tag color="red">red</Tag>
    </>
  );
}


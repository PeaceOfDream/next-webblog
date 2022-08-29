import React, { useState } from "react"
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios'
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";

function Home({menu}:HomeProps):JSX.Element {
	const [rating, setRating] = useState<number>(4)


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
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps = async () => {
	const firstCategory = 0;
	const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});


	return {
		props: {
			menu,
			firstCategory
		}
	}
}

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[],
	firstCategory: number
}
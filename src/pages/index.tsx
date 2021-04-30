import styled from "styled-components";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function Home(props: any) {
  return (
    <Wrapper>
      <div className="container">
        <ReactMarkdown children={props.markdownBody} />
      </div>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const content = await import(`../../README.md`);
  const data = matter(content.default);

  return {
    props: {
      markdownBody: data.content,
    },
  };
}

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

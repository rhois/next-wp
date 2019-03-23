import React from "react";
import Link from "next/link";
import "isomorphic-unfetch";

export default class Index extends React.Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch("http://localhost/api/wp/v2/posts");
    const json = await res.json();
    return { posts: json };
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>{posts[0].title.rendered}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: posts[0].content.rendered
          }}
        />
      </div>
    );
  }
}

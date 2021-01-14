import React from "react";
import ArticleHeader from "./ArticleHeader";
import TopArticles from "../../components/Aside/TopArticles";
import Comments from "./Comments";

const Article = () => {
  return (
    <div className="article">
      <ArticleHeader />
      <div className="article-content">
        <main>
          <h1 className="article-title">
            Horizon Zero Dawn: The Frozen Wilds, worth returning for?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            delectus aspernatur, laboriosam voluptatem dolor suscipit,
            praesentium qui commodi eius nisi unde ratione debitis assumenda
            doloremque, architecto ipsam. Dignissimos, unde obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <span className="font-heavy">Minus delectus aspernatur</span>,
            laboriosam voluptatem dolor suscipit, praesentium qui commodi eius
            nisi unde ratione debitis assumenda doloremque, architecto ipsam.
            Dignissimos, unde obcaecati.
          </p>
          <img src="/static/images/hzd-3.jpg" className="responsive"></img>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            delectus aspernatur, laboriosam voluptatem dolor suscipit,
            praesentium qui commodi eius nisi unde ratione debitis assumenda
            doloremque, architecto ipsam. Dignissimos, unde obcaecati.
          </p>
          <blockquote>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="font-heavy">
              Minus
              delectus aspernatur
            </span>, laboriosam voluptatem dolor suscipit.
          </blockquote>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            delectus aspernatur, laboriosam voluptatem dolor suscipit,
            praesentium qui commodi eius nisi unde ratione debitis assumenda
            doloremque, architecto ipsam. Dignissimos, unde obcaecati.
          </p>
          <img src="/static/images/hzd-3.jpg" className="responsive"></img>
          <Comments />
        </main>
        <aside>
          <TopArticles />
        </aside>
      </div>
    </div>
  );
};

export default Article;

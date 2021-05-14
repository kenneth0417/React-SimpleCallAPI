import React from "react";

function Articles({ articles }) {
  return (
    <div className="article-wrapper">
      {articles.map((article) => (
        <div className="article-section" key={article._id}>
          <div className="article-content">
            <h3>{article.headline.main}</h3>
            <p>{article.abstract}</p>
            <p>
              Read more : <span>{article.web_url}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Articles;

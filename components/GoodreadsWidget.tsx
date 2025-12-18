'use client';

import React, { useEffect, useRef } from 'react';

/**
 * GoodreadsWidget
 *
 * Renders the static HTML/CSS fallback for the Goodreads custom widget and
 * appends the Goodreads-provided <script> at runtime so the widget upgrades.
 *
 * If you want to update the widget settings (user id, shelf, num_books, etc.)
 * edit the SCRIPT_SRC constant below or replace the innerHTML markup.
 */

const SCRIPT_SRC = `https://www.goodreads.com/review/custom_widget/189361003.Andrew's%20bookshelf:%20read?cover_position=left&cover_size=small&num_books=5&order=d&shelf=read&show_author=1&show_cover=1&show_rating=0&show_review=1&show_tags=0&show_title=1&sort=date_read&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1766015051&widget_text_color=000000&widget_title_size=medium&widget_width=medium`;

export default function GoodreadsWidget(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // The static HTML markup (everything except the script tag)
  const staticMarkup = `
    <style type="text/css" media="screen">
      .gr_custom_container_1766015051 {
        border: 1px solid gray;
        border-radius:10px;
        padding: 10px 5px 10px 5px;
        background-color: #FFFFFF;
        color: #000000;
        width: 300px;
      }
      .gr_custom_header_1766015051 {
        border-bottom: 1px solid gray;
        width: 100%;
        margin-bottom: 5px;
        text-align: center;
        font-size: 120%;
      }
      .gr_custom_each_container_1766015051 {
        width: 100%;
        clear: both;
        margin-bottom: 10px;
        overflow: auto;
        padding-bottom: 4px;
        border-bottom: 1px solid #aaa;
      }
      .gr_custom_book_container_1766015051 {
        overflow: hidden;
        height: 60px;
        float: left;
        margin-right: 4px;
        width: 39px;
      }
      .gr_custom_author_1766015051 {
        font-size: 10px;
      }
      .gr_custom_tags_1766015051 {
        font-size: 10px;
        color: gray;
      }
      .gr_custom_rating_1766015051 {
        float: right;
      }
    </style>

    <div id="gr_custom_widget_1766015051">
      <div class="gr_custom_container_1766015051">
        <h2 class="gr_custom_header_1766015051">
          <a style="text-decoration: none;" rel="nofollow" href="https://www.goodreads.com/review/list/189361003-andrew-dawson?shelf=read&utm_medium=api&utm_source=custom_widget">Andrew&#39;s bookshelf: read</a>
        </h2>

        <div class="gr_custom_each_container_1766015051">
          <div class="gr_custom_book_container_1766015051">
            <a title="Anxious People" rel="nofollow" href="https://www.goodreads.com/review/show/8078994065?utm_medium=api&utm_source=custom_widget"><img alt="Anxious People" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597575031l/49127718._SY75_.jpg" /></a>
          </div>
          <div class="gr_custom_title_1766015051">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/8078994065?utm_medium=api&utm_source=custom_widget">Anxious People</a>
          </div>
          <div class="gr_custom_author_1766015051">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/6485178.Fredrik_Backman">Fredrik Backman</a>
          </div>
          <div class="gr_custom_review_1766015051">
            So full circle. Loved it. Characters were kinda insufferable at the beginning, but by the end I liked them all. Expectations were constantly subverted. Philosophical, ridiculous, hilarious, emotional. So much depth to every character. Fr...
          </div>
        </div>

        <div class="gr_custom_each_container_1766015051">
          <div class="gr_custom_book_container_1766015051">
            <a title="Never Let Me Go" rel="nofollow" href="https://www.goodreads.com/review/show/8078994257?utm_medium=api&utm_source=custom_widget"><img alt="Never Let Me Go" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598462660l/55132921._SY75_.jpg" /></a>
          </div>
          <div class="gr_custom_title_1766015051">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/8078994257?utm_medium=api&utm_source=custom_widget">Never Let Me Go</a>
          </div>
          <div class="gr_custom_author_1766015051">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/4280.Kazuo_Ishiguro">Kazuo Ishiguro</a>
          </div>
          <div class="gr_custom_review_1766015051">
            Took awhile to get through this one (even as a short book), but I liked it. I liked how subtly everything was revealed. Strange premise but thought-provoking.
          </div>
        </div>

        <div class="gr_custom_each_container_1766015051">
          <div class="gr_custom_book_container_1766015051">
            <a title="The Dungeon Anarchist's Cookbook (Dungeon Crawler Carl, #3)" rel="nofollow" href="https://www.goodreads.com/review/show/8006272454?utm_medium=api&utm_source=custom_widget"><img alt="The Dungeon Anarchist's Cookbook" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612814290l/57001971._SY75_.jpg" /></a>
          </div>
          <div class="gr_custom_title_1766015051">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/8006272454?utm_medium=api&utm_source=custom_widget">The Dungeon Anarchist's Cookbook</a>
          </div>
          <div class="gr_custom_author_1766015051">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/999015.Matt_Dinniman">Matt Dinniman</a>
          </div>
          <div class="gr_custom_review_1766015051">
            Trains were confusing. Hekla stuff was awesome. Carl is him
          </div>
        </div>

        <div class="gr_custom_each_container_1766015051">
          <div class="gr_custom_book_container_1766015051">
            <a title="Greenlights" rel="nofollow" href="https://www.goodreads.com/review/show/8006065367?utm_medium=api&utm_source=custom_widget"><img alt="Greenlights" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1604281659l/52838315._SX50_.jpg" /></a>
          </div>
          <div class="gr_custom_title_1766015051">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/8006065367?utm_medium=api&utm_source=custom_widget">Greenlights</a>
          </div>
          <div class="gr_custom_author_1766015051">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/3636965.Matthew_McConaughey">Matthew McConaughey</a>
          </div>
          <div class="gr_custom_review_1766015051">
            Loved this one start to finish. Had the audiobook too so I immersion read some of it, which was a lot of fun (since he reads it himself). Inspiring, hilarious, and beautifully written. Matthew McConaughey is a genius.
          </div>
        </div>

        <div class="gr_custom_each_container_1766015051">
          <div class="gr_custom_book_container_1766015051">
            <a title="The Churn (The Expanse, #3.5)" rel="nofollow" href="https://www.goodreads.com/review/show/8133526390?utm_medium=api&utm_source=custom_widget"><img alt="The Churn" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1397146232l/20981355._SX50_.jpg" /></a>
          </div>
          <div class="gr_custom_title_1766015051">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/8133526390?utm_medium=api&utm_source=custom_widget">The Churn</a>
          </div>
          <div class="gr_custom_author_1766015051">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/4192148.James_S_A_Corey">James S.A. Corey</a>
          </div>
        </div>

        <br style="clear: both"/>
        <center>
          <a rel="nofollow" href="https://www.goodreads.com/"><img alt="goodreads.com" style="border:0" src="https://s.gr-assets.com/images/widget/widget_logo.gif" /></a>
        </center>

        <noscript>
          Share <a rel="nofollow" href="https://www.goodreads.com/">book reviews</a> and ratings with Andrew, and even join a <a rel="nofollow" href="https://www.goodreads.com/group">book club</a> on Goodreads.
        </noscript>
      </div>
    </div>
  `;

  useEffect(() => {
    // Insert Goodreads script once when client loads
    // don't insert multiple times if already on page
    if (!containerRef.current) return;

    // check if script already exists
    const existing = document.querySelector(`script[data-goodreads-widget="1766015051"]`);
    if (existing) return;

    const s = document.createElement('script');
    s.src = SCRIPT_SRC;
    s.type = 'text/javascript';
    s.charset = 'utf-8';
    s.setAttribute('data-goodreads-widget', '1766015051');
    s.async = true;

    // append after the static markup container so Goodreads can transform it
    containerRef.current.appendChild(s);

    // cleanup (optional) - we don't remove the script on unmount to avoid flicker if user navigates back
    return () => {
      // optional cleanup: uncomment the next lines if you want to remove the script when component unmounts
      // if (s.parentNode) s.parentNode.removeChild(s);
    };
  }, []);

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: staticMarkup }} />
  );
}

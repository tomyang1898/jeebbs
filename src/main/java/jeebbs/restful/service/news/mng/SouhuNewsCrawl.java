package jeebbs.restful.service.news.mng;


import jeebbs.restful.service.news.model.HtmlParse2News;
import jeebbs.restful.service.news.model.News;
import jeebbs.restful.service.news.model.Parser2News;
import jeebbs.restful.util.HtmlUtil;
import jeebbs.restful.util.HttpUtil;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;


/**
 * Created by ztwang on 2017/6/29 0029.
 */
public class SouhuNewsCrawl extends AbstractNewsCrawl {
    private static final Logger LOG = LoggerFactory.getLogger(AbstractNewsCrawl.class);
    private static final String SOURCE = "souhu";

    public SouhuNewsCrawl() {
        super(SOURCE, LOG);
    }

    @Override
    protected Parser2News getParser() {
        return new SouhuHtmlParse2News();
    }

    private class SouhuHtmlParse2News extends HtmlParse2News{

        SouhuHtmlParse2News() {
            selector = SouhuNewsCrawl.this.selector;
        }

        @Override
        protected List<News> parse2News(Elements containers) {
            if (containers == null || containers.isEmpty()) return null;
            List<News> newsList = new ArrayList<>();
            for (Element content: containers) {
                Element titleElem = HtmlUtil.getChildrenBySelector(content, titleSelector, 0);
                String title = titleElem.text();
                String href = titleElem.attr("href");
                if (StringUtils.isEmpty(title) || StringUtils.isEmpty(href)) continue;
                href = HtmlUtil.normalizeHref(href, url);
                String html = HttpUtil.sendGET(href);
                String profile = getProfile(html, profileSelector, abstractLength);
                Timestamp stmp = getTimestamp(html, timeSelector, "data-val", null);
                News news = new News(name, title, href, profile, stmp);
                newsList.add(news);
            }

            return newsList.isEmpty() ? null : newsList ;
        }
    }
}

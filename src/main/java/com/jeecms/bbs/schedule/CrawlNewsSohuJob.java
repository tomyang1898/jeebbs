package com.jeecms.bbs.schedule;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.jeecms.bbs.entity.BbsNews;
import com.jeecms.bbs.manager.BbsNewsMng;
import com.jeecms.common.bbsnews.impl.SohuNews;

public class CrawlNewsSohuJob {
private static final Logger log = LoggerFactory.getLogger(CrawlNewsXiuqiuJob.class);
	
	public void execute(){
		try{
			log.info("Crawl News From Sohu Daily Job begin");
			System.out.println("Crawl News From Sohu Daily Job begin");
			SohuNews crawlNews=new SohuNews();
			List<BbsNews> bbsNews=crawlNews.getTodayBbsNews();
			if(bbsNews!=null){
				for(BbsNews bbsNew:bbsNews){					
					mng.save(bbsNew);
				
				}
			}
			System.out.println("Crawl News From Sohu Daily Job end");
			log.info("Crawl News From Sohu Daily Job end");
		}catch(Exception e){
			log.error("Crawl News From Sohu Daily Job Fail",e);
		}
	}
	@Autowired
	private BbsNewsMng mng;
}

package com.cenfotec.test.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import io.github.jhipster.config.jcache.BeanClassLoaderAwareJCacheRegionFactory;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        BeanClassLoaderAwareJCacheRegionFactory.setBeanClassLoader(this.getClass().getClassLoader());
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(com.cenfotec.test.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(com.cenfotec.test.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Period.class.getName(), jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Period.class.getName() + ".projects", jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Project.class.getName(), jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Project.class.getName() + ".teams", jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Team.class.getName(), jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Team.class.getName() + ".students", jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Team.class.getName() + ".sprints", jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Sprint.class.getName(), jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Sprint.class.getName() + ".stories", jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Student.class.getName(), jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Story.class.getName(), jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Story.class.getName() + ".students", jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Story.class.getName() + ".reviews", jcacheConfiguration);
            cm.createCache(com.cenfotec.test.domain.Review.class.getName(), jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}

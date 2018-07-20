const AbstractModel = require("../../common/abstract_model");

/**
 * DescribeBrandPosComments请求参数结构体
 * @class
 */
class DescribeBrandPosCommentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌ID
         * @type {string || null}
         */
        this.BrandId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 查询条数上限，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询偏移，从0开始
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = params.BrandId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

    }
}

/**
 * 文章信息
 * @class
 */
class BrandReportArticle extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文章标题
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 文章url地址
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 文章来源
         * @type {string || null}
         */
        this.FromSite = null;

        /**
         * 文章发表日期
         * @type {string || null}
         */
        this.PubTime = null;

        /**
         * 文章标识
         * @type {number || null}
         */
        this.Flag = null;

        /**
         * 文章热度值
         * @type {number || null}
         */
        this.Hot = null;

        /**
         * 文章来源等级
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 文章摘要
         * @type {string || null}
         */
        this.Abstract = null;

        /**
         * 文章ID
         * @type {string || null}
         */
        this.ArticleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Title = params.Title || null;
        this.Url = params.Url || null;
        this.FromSite = params.FromSite || null;
        this.PubTime = params.PubTime || null;
        this.Flag = params.Flag || null;
        this.Hot = params.Hot || null;
        this.Level = params.Level || null;
        this.Abstract = params.Abstract || null;
        this.ArticleId = params.ArticleId || null;

    }
}

/**
 * DescribeBrandSocialOpinion返回参数结构体
 * @class
 */
class DescribeBrandSocialOpinionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 文章总数
         * @type {number || null}
         */
        this.ArticleCount = null;

        /**
         * 来源统计总数
         * @type {number || null}
         */
        this.FromCount = null;

        /**
         * 疑似负面报道总数
         * @type {number || null}
         */
        this.AdverseCount = null;

        /**
         * 文章列表详情
         * @type {Array.<BrandReportArticle> || null}
         */
        this.ArticleSet = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ArticleCount = params.ArticleCount || null;
        this.FromCount = params.FromCount || null;
        this.AdverseCount = params.AdverseCount || null;

        if (params.ArticleSet) {
            this.ArticleSet = new Array();
            for (let z in params.ArticleSet) {
                let obj = new BrandReportArticle();
                obj.deserialize(params.ArticleSet[z]);
                this.ArticleSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeBrandExposure返回参数结构体
 * @class
 */
class DescribeBrandExposureResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 累计曝光量
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 按天计算的统计数据
         * @type {Array.<DateCount> || null}
         */
        this.DateCountSet = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = params.TotalCount || null;

        if (params.DateCountSet) {
            this.DateCountSet = new Array();
            for (let z in params.DateCountSet) {
                let obj = new DateCount();
                obj.deserialize(params.DateCountSet[z]);
                this.DateCountSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeBrandPosComments返回参数结构体
 * @class
 */
class DescribeBrandPosCommentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 评论列表
         * @type {Array.<CommentInfo> || null}
         */
        this.BrandCommentSet = null;

        /**
         * 总的好评个数
         * @type {number || null}
         */
        this.TotalComments = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BrandCommentSet) {
            this.BrandCommentSet = new Array();
            for (let z in params.BrandCommentSet) {
                let obj = new CommentInfo();
                obj.deserialize(params.BrandCommentSet[z]);
                this.BrandCommentSet.push(obj);
            }
        }
        this.TotalComments = params.TotalComments || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeIndustryNews请求参数结构体
 * @class
 */
class DescribeIndustryNewsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 行业ID
         * @type {string || null}
         */
        this.IndustryId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 是否显示列表，若为 true，则返回文章列表
         * @type {boolean || null}
         */
        this.ShowList = null;

        /**
         * 查询偏移，默认从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询条数上限，默认20
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IndustryId = params.IndustryId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;
        this.ShowList = params.ShowList || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;

    }
}

/**
 * DescribeBrandSocialOpinion请求参数结构体
 * @class
 */
class DescribeBrandSocialOpinionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌ID
         * @type {string || null}
         */
        this.BrandId = null;

        /**
         * 检索开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 检索结束时间
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 查询偏移，默认从0开始
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * 查询条数上限，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 列表显示标记，若为true，则返回文章列表详情
         * @type {boolean || null}
         */
        this.ShowList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = params.BrandId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;
        this.Offset = params.Offset || null;
        this.Limit = params.Limit || null;
        this.ShowList = params.ShowList || null;

    }
}

/**
 * DescribeBrandSocialReport请求参数结构体
 * @class
 */
class DescribeBrandSocialReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌ID
         * @type {string || null}
         */
        this.BrandId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = params.BrandId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;

    }
}

/**
 * DescribeBrandSocialReport返回参数结构体
 * @class
 */
class DescribeBrandSocialReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 累计统计数据
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 按天计算的统计数据
         * @type {Array.<DateCount> || null}
         */
        this.DateCountSet = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = params.TotalCount || null;

        if (params.DateCountSet) {
            this.DateCountSet = new Array();
            for (let z in params.DateCountSet) {
                let obj = new DateCount();
                obj.deserialize(params.DateCountSet[z]);
                this.DateCountSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeBrandExposure请求参数结构体
 * @class
 */
class DescribeBrandExposureRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌ID
         * @type {string || null}
         */
        this.BrandId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = params.BrandId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;

    }
}

/**
 * 用户评论内容类型
 * @class
 */
class CommentInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户评论内容
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * 评论的时间
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Comment = params.Comment || null;
        this.Date = params.Date || null;

    }
}

/**
 * 明星喜好画像元素
 * @class
 */
class StarPortrait extends  AbstractModel {
    constructor(){
        super();

        /**
         * 喜欢的明星名字
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 百分比
         * @type {number || null}
         */
        this.Percent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = params.Name || null;
        this.Percent = params.Percent || null;

    }
}

/**
 * 按日期的统计数据
 * @class
 */
class DateCount extends  AbstractModel {
    constructor(){
        super();

        /**
         * 统计日期
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 统计值
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = params.Date || null;
        this.Count = params.Count || null;

    }
}

/**
 * 用户性别画像元素数组
 * @class
 */
class GenderPortraitInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户性别画像数组
         * @type {Array.<GenderPortrait> || null}
         */
        this.PortraitSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PortraitSet) {
            this.PortraitSet = new Array();
            for (let z in params.PortraitSet) {
                let obj = new GenderPortrait();
                obj.deserialize(params.PortraitSet[z]);
                this.PortraitSet.push(obj);
            }
        }

    }
}

/**
 * 行业报道新闻
 * @class
 */
class IndustryNews extends  AbstractModel {
    constructor(){
        super();

        /**
         * 行业报道ID
         * @type {string || null}
         */
        this.IndustryId = null;

        /**
         * 报道发表时间
         * @type {string || null}
         */
        this.PubTime = null;

        /**
         * 报道来源
         * @type {string || null}
         */
        this.FromSite = null;

        /**
         * 报道标题
         * @type {string || null}
         */
        this.Title = null;

        /**
         * 报道来源url
         * @type {string || null}
         */
        this.Url = null;

        /**
         * 报道来源等级
         * @type {number || null}
         */
        this.Level = null;

        /**
         * 热度值
         * @type {number || null}
         */
        this.Hot = null;

        /**
         * 报道标识
         * @type {number || null}
         */
        this.Flag = null;

        /**
         * 报道摘要
         * @type {string || null}
         */
        this.Abstract = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IndustryId = params.IndustryId || null;
        this.PubTime = params.PubTime || null;
        this.FromSite = params.FromSite || null;
        this.Title = params.Title || null;
        this.Url = params.Url || null;
        this.Level = params.Level || null;
        this.Hot = params.Hot || null;
        this.Flag = params.Flag || null;
        this.Abstract = params.Abstract || null;

    }
}

/**
 * 省份画像元素
 * @class
 */
class ProvincePortrait extends  AbstractModel {
    constructor(){
        super();

        /**
         * 省份名称
         * @type {string || null}
         */
        this.Province = null;

        /**
         * 百分比
         * @type {number || null}
         */
        this.Percent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Province = params.Province || null;
        this.Percent = params.Percent || null;

    }
}

/**
 * 用户喜好的明星画像元素数组
 * @class
 */
class StarPortraitInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户喜好的明星画像数组
         * @type {Array.<StarPortrait> || null}
         */
        this.PortraitSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PortraitSet) {
            this.PortraitSet = new Array();
            for (let z in params.PortraitSet) {
                let obj = new StarPortrait();
                obj.deserialize(params.PortraitSet[z]);
                this.PortraitSet.push(obj);
            }
        }

    }
}

/**
 * 用户年龄画像元素数组
 * @class
 */
class AgePortraitInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户年龄画像数组
         * @type {Array.<AgePortrait> || null}
         */
        this.PortraitSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PortraitSet) {
            this.PortraitSet = new Array();
            for (let z in params.PortraitSet) {
                let obj = new AgePortrait();
                obj.deserialize(params.PortraitSet[z]);
                this.PortraitSet.push(obj);
            }
        }

    }
}

/**
 * DescribeUserPortrait返回参数结构体
 * @class
 */
class DescribeUserPortraitResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 年龄画像
         * @type {AgePortraitInfo || null}
         */
        this.Age = null;

        /**
         * 性别画像
         * @type {GenderPortraitInfo || null}
         */
        this.Gender = null;

        /**
         * 省份画像
         * @type {ProvincePortraitInfo || null}
         */
        this.Province = null;

        /**
         * 电影喜好画像
         * @type {MoviePortraitInfo || null}
         */
        this.Movie = null;

        /**
         * 明星喜好画像
         * @type {StarPortraitInfo || null}
         */
        this.Star = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Age) {
            let obj = new AgePortraitInfo();
            obj.deserialize(params.Age)
            this.Age = obj;
        }

        if (params.Gender) {
            let obj = new GenderPortraitInfo();
            obj.deserialize(params.Gender)
            this.Gender = obj;
        }

        if (params.Province) {
            let obj = new ProvincePortraitInfo();
            obj.deserialize(params.Province)
            this.Province = obj;
        }

        if (params.Movie) {
            let obj = new MoviePortraitInfo();
            obj.deserialize(params.Movie)
            this.Movie = obj;
        }

        if (params.Star) {
            let obj = new StarPortraitInfo();
            obj.deserialize(params.Star)
            this.Star = obj;
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeBrandCommentCount请求参数结构体
 * @class
 */
class DescribeBrandCommentCountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌ID
         * @type {string || null}
         */
        this.BrandId = null;

        /**
         * 查询开始日期
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 查询结束日期
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = params.BrandId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;

    }
}

/**
 * DescribeBrandMediaReport请求参数结构体
 * @class
 */
class DescribeBrandMediaReportRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌ID
         * @type {string || null}
         */
        this.BrandId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndDate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = params.BrandId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;

    }
}

/**
 * DescribeBrandMediaReport返回参数结构体
 * @class
 */
class DescribeBrandMediaReportResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 查询范围内文章总数
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * 按天计算的每天文章数
         * @type {Array.<DateCount> || null}
         */
        this.DateCountSet = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TotalCount = params.TotalCount || null;

        if (params.DateCountSet) {
            this.DateCountSet = new Array();
            for (let z in params.DateCountSet) {
                let obj = new DateCount();
                obj.deserialize(params.DateCountSet[z]);
                this.DateCountSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 用户好评差评个数信息
 * @class
 */
class Comment extends  AbstractModel {
    constructor(){
        super();

        /**
         * 评论的日期
         * @type {string || null}
         */
        this.Date = null;

        /**
         * 差评的个数
         * @type {number || null}
         */
        this.NegCommentCount = null;

        /**
         * 好评的个数
         * @type {number || null}
         */
        this.PosCommentCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Date = params.Date || null;
        this.NegCommentCount = params.NegCommentCount || null;
        this.PosCommentCount = params.PosCommentCount || null;

    }
}

/**
 * 用户省份画像元素数组
 * @class
 */
class ProvincePortraitInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户省份画像数组
         * @type {Array.<ProvincePortrait> || null}
         */
        this.PortraitSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PortraitSet) {
            this.PortraitSet = new Array();
            for (let z in params.PortraitSet) {
                let obj = new ProvincePortrait();
                obj.deserialize(params.PortraitSet[z]);
                this.PortraitSet.push(obj);
            }
        }

    }
}

/**
 * DescribeBrandCommentCount返回参数结构体
 * @class
 */
class DescribeBrandCommentCountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 按天统计好评/差评数
         * @type {Array.<Comment> || null}
         */
        this.CommentSet = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CommentSet) {
            this.CommentSet = new Array();
            for (let z in params.CommentSet) {
                let obj = new Comment();
                obj.deserialize(params.CommentSet[z]);
                this.CommentSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * 电影喜好画像元素
 * @class
 */
class MoviePortrait extends  AbstractModel {
    constructor(){
        super();

        /**
         * 电影名称
         * @type {string || null}
         */
        this.Name = null;

        /**
         * 百分比
         * @type {number || null}
         */
        this.Percent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = params.Name || null;
        this.Percent = params.Percent || null;

    }
}

/**
 * DescribeIndustryNews返回参数结构体
 * @class
 */
class DescribeIndustryNewsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 总计文章数量
         * @type {number || null}
         */
        this.NewsCount = null;

        /**
         * 总计来源数量
         * @type {number || null}
         */
        this.FromCount = null;

        /**
         * 总计疑似负面数量
         * @type {number || null}
         */
        this.AdverseCount = null;

        /**
         * 文章列表
         * @type {Array.<IndustryNews> || null}
         */
        this.NewsSet = null;

        /**
         * 按天统计的数量列表
         * @type {Array.<DateCount> || null}
         */
        this.DateCountSet = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NewsCount = params.NewsCount || null;
        this.FromCount = params.FromCount || null;
        this.AdverseCount = params.AdverseCount || null;

        if (params.NewsSet) {
            this.NewsSet = new Array();
            for (let z in params.NewsSet) {
                let obj = new IndustryNews();
                obj.deserialize(params.NewsSet[z]);
                this.NewsSet.push(obj);
            }
        }

        if (params.DateCountSet) {
            this.DateCountSet = new Array();
            for (let z in params.DateCountSet) {
                let obj = new DateCount();
                obj.deserialize(params.DateCountSet[z]);
                this.DateCountSet.push(obj);
            }
        }
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeBrandNegComments返回参数结构体
 * @class
 */
class DescribeBrandNegCommentsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * 评论列表
         * @type {Array.<CommentInfo> || null}
         */
        this.BrandCommentSet = null;

        /**
         * 总的差评个数
         * @type {number || null}
         */
        this.TotalComments = null;

        /**
         * 唯一请求ID，每次请求都会返回。定位问题时需要提供该次请求的RequestId。
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.BrandCommentSet) {
            this.BrandCommentSet = new Array();
            for (let z in params.BrandCommentSet) {
                let obj = new CommentInfo();
                obj.deserialize(params.BrandCommentSet[z]);
                this.BrandCommentSet.push(obj);
            }
        }
        this.TotalComments = params.TotalComments || null;
        this.RequestId = params.RequestId || null;

    }
}

/**
 * DescribeUserPortrait请求参数结构体
 * @class
 */
class DescribeUserPortraitRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌ID
         * @type {string || null}
         */
        this.BrandId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = params.BrandId || null;

    }
}

/**
 * DescribeBrandNegComments请求参数结构体
 * @class
 */
class DescribeBrandNegCommentsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 品牌ID
         * @type {string || null}
         */
        this.BrandId = null;

        /**
         * 查询开始时间
         * @type {string || null}
         */
        this.StartDate = null;

        /**
         * 查询结束时间
         * @type {string || null}
         */
        this.EndDate = null;

        /**
         * 查询条数上限，默认20
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * 查询偏移，默认从0开始
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BrandId = params.BrandId || null;
        this.StartDate = params.StartDate || null;
        this.EndDate = params.EndDate || null;
        this.Limit = params.Limit || null;
        this.Offset = params.Offset || null;

    }
}

/**
 * 用户年龄画像
 * @class
 */
class AgePortrait extends  AbstractModel {
    constructor(){
        super();

        /**
         * 年龄区间
         * @type {string || null}
         */
        this.AgeRange = null;

        /**
         * 百分比
         * @type {number || null}
         */
        this.Percent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AgeRange = params.AgeRange || null;
        this.Percent = params.Percent || null;

    }
}

/**
 * 用户喜好电影画像元素数组
 * @class
 */
class MoviePortraitInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * 用户喜好电影画像数组
         * @type {Array.<MoviePortrait> || null}
         */
        this.PortraitSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PortraitSet) {
            this.PortraitSet = new Array();
            for (let z in params.PortraitSet) {
                let obj = new MoviePortrait();
                obj.deserialize(params.PortraitSet[z]);
                this.PortraitSet.push(obj);
            }
        }

    }
}

/**
 * 性别画像元素
 * @class
 */
class GenderPortrait extends  AbstractModel {
    constructor(){
        super();

        /**
         * 性别
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * 百分比
         * @type {number || null}
         */
        this.Percent = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Gender = params.Gender || null;
        this.Percent = params.Percent || null;

    }
}

module.exports = {
    DescribeBrandPosCommentsRequest: DescribeBrandPosCommentsRequest,
    BrandReportArticle: BrandReportArticle,
    DescribeBrandSocialOpinionResponse: DescribeBrandSocialOpinionResponse,
    DescribeBrandExposureResponse: DescribeBrandExposureResponse,
    DescribeBrandPosCommentsResponse: DescribeBrandPosCommentsResponse,
    DescribeIndustryNewsRequest: DescribeIndustryNewsRequest,
    DescribeBrandSocialOpinionRequest: DescribeBrandSocialOpinionRequest,
    DescribeBrandSocialReportRequest: DescribeBrandSocialReportRequest,
    DescribeBrandSocialReportResponse: DescribeBrandSocialReportResponse,
    DescribeBrandExposureRequest: DescribeBrandExposureRequest,
    CommentInfo: CommentInfo,
    StarPortrait: StarPortrait,
    DateCount: DateCount,
    GenderPortraitInfo: GenderPortraitInfo,
    IndustryNews: IndustryNews,
    ProvincePortrait: ProvincePortrait,
    StarPortraitInfo: StarPortraitInfo,
    AgePortraitInfo: AgePortraitInfo,
    DescribeUserPortraitResponse: DescribeUserPortraitResponse,
    DescribeBrandCommentCountRequest: DescribeBrandCommentCountRequest,
    DescribeBrandMediaReportRequest: DescribeBrandMediaReportRequest,
    DescribeBrandMediaReportResponse: DescribeBrandMediaReportResponse,
    Comment: Comment,
    ProvincePortraitInfo: ProvincePortraitInfo,
    DescribeBrandCommentCountResponse: DescribeBrandCommentCountResponse,
    MoviePortrait: MoviePortrait,
    DescribeIndustryNewsResponse: DescribeIndustryNewsResponse,
    DescribeBrandNegCommentsResponse: DescribeBrandNegCommentsResponse,
    DescribeUserPortraitRequest: DescribeUserPortraitRequest,
    DescribeBrandNegCommentsRequest: DescribeBrandNegCommentsRequest,
    AgePortrait: AgePortrait,
    MoviePortraitInfo: MoviePortraitInfo,
    GenderPortrait: GenderPortrait,

}

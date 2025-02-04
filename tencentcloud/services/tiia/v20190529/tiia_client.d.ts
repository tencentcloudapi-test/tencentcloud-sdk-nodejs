import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DetectProductBetaResponse, DetectDisgustRequest, SearchImageResponse, CreateImageRequest, DeleteImagesResponse, CropImageRequest, DetectProductRequest, DescribeGroupsRequest, AssessQualityResponse, DetectDisgustResponse, SearchImageRequest, RecognizeCarResponse, DetectLabelRequest, DetectLabelResponse, EnhanceImageResponse, AssessQualityRequest, DeleteImagesRequest, CreateGroupRequest, DescribeImagesRequest, DetectProductBetaRequest, DetectMisbehaviorResponse, RecognizeCarRequest, EnhanceImageRequest, CropImageResponse, DetectCelebrityRequest, DetectProductResponse, DetectLabelBetaRequest, CreateImageResponse, DetectLabelBetaResponse, DetectCelebrityResponse, DescribeGroupsResponse, DescribeImagesResponse, DetectMisbehaviorRequest, CreateGroupResponse } from "./tiia_models";
/**
 * tiia client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建图片，并添加对应图片的自定义信息。
     */
    CreateImage(req: CreateImageRequest, cb?: (error: string, rep: CreateImageResponse) => void): Promise<CreateImageResponse>;
    /**
     * 商品识别-微信识物版，基于人工智能技术、海量训练图片、亿级商品库，可以实现全覆盖、细粒度、高准确率的商品识别和商品推荐功能。
本服务可以识别出图片中的主体位置、主体商品类型，覆盖亿级SKU，输出具体商品的价格、型号等详细信息。
客户无需自建商品库，即可快速实现商品识别、拍照搜商品等功能。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    DetectProductBeta(req: DetectProductBetaRequest, cb?: (error: string, rep: DetectProductBetaResponse) => void): Promise<DetectProductBetaResponse>;
    /**
     * 腾讯云车辆属性识别可对汽车车身及车辆属性进行检测与识别，目前支持11种车身颜色、20多种车型、300多种品牌、4000多种车系+年款的识别，同时支持对车辆的位置进行检测。如果图片中存在多辆车，会分别输出每辆车的车型和坐标。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    RecognizeCar(req: RecognizeCarRequest, cb?: (error: string, rep: RecognizeCarResponse) => void): Promise<RecognizeCarResponse>;
    /**
     * 图像标签利用深度学习技术、海量训练数据，可以对图片进行智能分类、物体识别等。

目前支持8个大类、六十多个子类、数千个标签。涵盖各种日常场景、动植物、物品、美食、卡证等。具体分类请见[图像分析常见问题功能与限制相关](https://cloud.tencent.com/document/product/865/39164)。

图像标签提供四个版本供选择：

• 摄像头版：针对搜索、手机摄像头照片进行优化，涵盖大量卡证、日常物品、二维码条形码。

• 相册版：针对手机相册、网盘进行优化，去除相册和网盘中不常见的标签，针对相册常见图片类型（人像、日常活动、日常物品等）识别效果更好。

• 网络版：针对网络图片进行优化，涵盖标签更多，满足长尾识别需求。

• 新闻版：针对新闻、资讯、广电等行业进行优化，增加定制识别，支持万级图像标签。

每个产品的图像类型都有独特性，建议在接入初期，对四个版本进行对比评估后选择合适的版本使用。

为了方便使用、减少图片传输次数，图像标签包装成多合一接口，实际上是多个服务。

图像标签按照服务的实际使用数量进行收费。例如一张图片同时调用相册版、摄像头版两个服务，那么此次调用按照两次计费。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    DetectLabel(req: DetectLabelRequest, cb?: (error: string, rep: DetectLabelResponse) => void): Promise<DetectLabelResponse>;
    /**
     * 评估输入图片在视觉上的质量，从多个方面评估，并同时给出综合的、客观的清晰度评分，和主观的美观度评分。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    AssessQuality(req: AssessQualityRequest, cb?: (error: string, rep: AssessQualityResponse) => void): Promise<AssessQualityResponse>;
    /**
     * 输入一张图片，返回AI针对一张图片是否是恶心的一系列判断值。

通过恶心图片识别, 可以判断一张图片是否令人恶心, 同时给出它属于的潜在类别, 让您能够过滤掉使人不愉快的图片。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    DetectDisgust(req: DetectDisgustRequest, cb?: (error: string, rep: DetectDisgustResponse) => void): Promise<DetectDisgustResponse>;
    /**
     * 查询所有的图库信息。
     */
    DescribeGroups(req: DescribeGroupsRequest, cb?: (error: string, rep: DescribeGroupsResponse) => void): Promise<DescribeGroupsResponse>;
    /**
     * 删除图片。
     */
    DeleteImages(req: DeleteImagesRequest, cb?: (error: string, rep: DeleteImagesResponse) => void): Promise<DeleteImagesResponse>;
    /**
     * 图像标签测试接口

>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    DetectLabelBeta(req: DetectLabelBetaRequest, cb?: (error: string, rep: DetectLabelBetaResponse) => void): Promise<DetectLabelBetaResponse>;
    /**
     * 根据输入的裁剪比例，智能判断一张图片的最佳裁剪区域，确保原图的主体区域不受影响。

可以自动裁剪图片，适应不同平台、设备的展示要求，避免简单拉伸带来的变形。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    CropImage(req: CropImageRequest, cb?: (error: string, rep: CropImageResponse) => void): Promise<CropImageResponse>;
    /**
     * 获取指定图片库中的图片列表。
     */
    DescribeImages(req: DescribeImagesRequest, cb?: (error: string, rep: DescribeImagesResponse) => void): Promise<DescribeImagesResponse>;
    /**
     * 可以识别输入的图片中是否包含不良行为，例如打架斗殴、赌博、抽烟等，可以应用于广告图、直播截图、短视频截图等审核，减少不良行为对平台内容质量的影响，维护健康向上的互联网环境。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    DetectMisbehavior(req: DetectMisbehaviorRequest, cb?: (error: string, rep: DetectMisbehaviorResponse) => void): Promise<DetectMisbehaviorResponse>;
    /**
     * 用于创建一个空的图片库，如果图片库已存在则返回错误。

     */
    CreateGroup(req: CreateGroupRequest, cb?: (error: string, rep: CreateGroupResponse) => void): Promise<CreateGroupResponse>;
    /**
     * 本接口支持识别图片中包含的商品，能够输出商品的品类名称、类别，还可以输出商品在图片中的位置。支持一张图片多个商品的识别。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    DetectProduct(req: DetectProductRequest, cb?: (error: string, rep: DetectProductResponse) => void): Promise<DetectProductResponse>;
    /**
     * 本接口用于对一张待识别的商品图片，在指定图片库中检索出最相似的图片列表。
     */
    SearchImage(req: SearchImageRequest, cb?: (error: string, rep: SearchImageResponse) => void): Promise<SearchImageResponse>;
    /**
     * 传入一张图片，输出清晰度提升后的图片。

可以消除图片有损压缩导致的噪声，和使用滤镜、拍摄失焦导致的模糊。让图片的边缘和细节更加清晰自然。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    EnhanceImage(req: EnhanceImageRequest, cb?: (error: string, rep: EnhanceImageResponse) => void): Promise<EnhanceImageResponse>;
    /**
     * 传入一张图片，可以识别图片中包含的人物是否为公众人物，如果是，输出人物的姓名、基本信息、脸部坐标。

支持识别一张图片中存在的多个人脸，针对每个人脸，会给出与之最相似的公众人物。
>
- 公共参数中的签名方式必须指定为V3版本，即配置SignatureMethod参数为TC3-HMAC-SHA256。
     */
    DetectCelebrity(req: DetectCelebrityRequest, cb?: (error: string, rep: DetectCelebrityResponse) => void): Promise<DetectCelebrityResponse>;
}

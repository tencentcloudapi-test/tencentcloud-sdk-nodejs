import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { BindAutoScalingGroupRequest, DeleteClusterRequest, CreateClusterRequest, DeleteClusterResponse, BindAutoScalingGroupResponse, CreateClusterResponse } from "./thpc_models";
/**
 * thpc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口（DeleteCluster）用于删除一个指定的集群。
     */
    DeleteCluster(req: DeleteClusterRequest, cb?: (error: string, rep: DeleteClusterResponse) => void): Promise<DeleteClusterResponse>;
    /**
     * 本接口(BindAutoScalingGroup)用于为集群队列绑定弹性伸缩组
     */
    BindAutoScalingGroup(req: BindAutoScalingGroupRequest, cb?: (error: string, rep: BindAutoScalingGroupResponse) => void): Promise<BindAutoScalingGroupResponse>;
    /**
     * 本接口 (CreateCluster) 用于创建并启动集群。
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
}

// 媒体平台静态清单：量潮在各媒体平台的账号矩阵
// 条目数据来源：data/profile/（运营档案），待补充后启用
export interface Platform {
  slug: string;
  name: string;
  scope: string;
  url?: string;
}

export const platforms: Platform[] = [];

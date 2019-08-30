// This file is automatically generated by "raml-to-ts.js".

import axios from 'axios';
/**
 * Chatwork API v2
 */
export default class ChatworkApi {
  constructor(private api_token: string) {}

  /**
   * 自分自身の情報を取得
   */
  async getMe(getMeParam: GetMeParam = {}) {
    const { data } = await axios.get(`https://api.chatwork.com/v2/me`, {
      params: getMeParam,
      headers: { 'X-ChatWorkToken': this.api_token },
    });

    return data as GetMeResponse;
  }

  /**
   * 自分の未読数、未読To数、未完了タスク数を返す
   */
  async getMyStatus(getMyStatusParam: GetMyStatusParam = {}) {
    const { data } = await axios.get(`https://api.chatwork.com/v2/my/status`, {
      params: getMyStatusParam,
      headers: { 'X-ChatWorkToken': this.api_token },
    });

    return data as GetMyStatusResponse;
  }

  /**
   * 自分のタスク一覧を取得する。(※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
   */
  async getMyTasks(getMyTasksParam: GetMyTasksParam) {
    const { data } = await axios.get(`https://api.chatwork.com/v2/my/tasks`, {
      params: getMyTasksParam,
      headers: { 'X-ChatWorkToken': this.api_token },
    });

    return data as GetMyTasksResponse;
  }

  /**
   * 自分のコンタクト一覧を取得
   */
  async getContacts(getContactsParam: GetContactsParam = {}) {
    const { data } = await axios.get(`https://api.chatwork.com/v2/contacts`, {
      params: getContactsParam,
      headers: { 'X-ChatWorkToken': this.api_token },
    });

    return data as GetContactsResponse;
  }

  /**
   * チャットのメンバー一覧を取得
   */
  async getRoomMembers(
    room_id: number | string,
    getRoomMembersParam: GetRoomMembersParam = {},
  ) {
    const { data } = await axios.get(
      `https://api.chatwork.com/v2/rooms/${room_id}/members`,
      {
        params: getRoomMembersParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data as GetRoomMembersResponse;
  }

  /**
   * チャットのメンバーを一括変更
   */
  async putRoomMembers(
    room_id: number | string,
    putRoomMembersParam: PutRoomMembersParam = {},
  ) {
    const params = new URLSearchParams();
    Object.entries(putRoomMembersParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.put(
      `https://api.chatwork.com/v2/rooms/${room_id}/members`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PutRoomMembersResponse;
  }

  /**
   * メッセージを既読にする
   */
  async putRoomMessagesRead(
    room_id: number | string,
    putRoomMessagesReadParam: PutRoomMessagesReadParam,
  ) {
    const params = new URLSearchParams();
    Object.entries(putRoomMessagesReadParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.put(
      `https://api.chatwork.com/v2/rooms/${room_id}/messages/read`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PutRoomMessagesReadResponse;
  }

  /**
   * メッセージを未読にする
   */
  async putRoomMessagesUnread(
    room_id: number | string,
    putRoomMessagesUnreadParam: PutRoomMessagesUnreadParam,
  ) {
    const params = new URLSearchParams();
    Object.entries(putRoomMessagesUnreadParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.put(
      `https://api.chatwork.com/v2/rooms/${room_id}/messages/unread`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PutRoomMessagesUnreadResponse;
  }

  /**
   * メッセージ情報を取得
   */
  async getRoomMessage(
    room_id: number | string,
    message_id: number | string,
    getRoomMessageParam: GetRoomMessageParam = {},
  ) {
    const { data } = await axios.get(
      `https://api.chatwork.com/v2/rooms/${room_id}/messages/${message_id}`,
      {
        params: getRoomMessageParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data as GetRoomMessageResponse;
  }

  /**
   * チャットのメッセージを更新する。
   */
  async putRoomMessage(
    room_id: number | string,
    message_id: number | string,
    putRoomMessageParam: PutRoomMessageParam,
  ) {
    const params = new URLSearchParams();
    Object.entries(putRoomMessageParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.put(
      `https://api.chatwork.com/v2/rooms/${room_id}/messages/${message_id}`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PutRoomMessageResponse;
  }

  /**
   * メッセージを削除
   */
  async deleteRoomMessage(
    room_id: number | string,
    message_id: number | string,
    deleteRoomMessageParam: DeleteRoomMessageParam = {},
  ) {
    const { data } = await axios.delete(
      `https://api.chatwork.com/v2/rooms/${room_id}/messages/${message_id}`,
      {
        params: deleteRoomMessageParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data as DeleteRoomMessageResponse;
  }

  /**
   * チャットのメッセージ一覧を取得。パラメータ未指定だと前回取得分からの差分のみを返します。(最大100件まで取得)
   */
  async getRoomMessages(
    room_id: number | string,
    getRoomMessagesParam: GetRoomMessagesParam,
  ) {
    const { data } = await axios.get(
      `https://api.chatwork.com/v2/rooms/${room_id}/messages`,
      {
        params: getRoomMessagesParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data as GetRoomMessagesResponse;
  }

  /**
   * チャットに新しいメッセージを追加
   */
  async postRoomMessage(
    room_id: number | string,
    postRoomMessageParam: PostRoomMessageParam,
  ) {
    const params = new URLSearchParams();
    Object.entries(postRoomMessageParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.post(
      `https://api.chatwork.com/v2/rooms/${room_id}/messages`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PostRoomMessageResponse;
  }

  /**
   * タスク完了状態を変更する
   */
  async putRoomTaskStatus(
    room_id: number | string,
    task_id: number | string,
    putRoomTaskStatusParam: PutRoomTaskStatusParam,
  ) {
    const params = new URLSearchParams();
    Object.entries(putRoomTaskStatusParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.put(
      `https://api.chatwork.com/v2/rooms/${room_id}/tasks/${task_id}/status`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PutRoomTaskStatusResponse;
  }

  /**
   * タスク情報を取得
   */
  async getRoomTask(
    room_id: number | string,
    task_id: number | string,
    getRoomTaskParam: GetRoomTaskParam = {},
  ) {
    const { data } = await axios.get(
      `https://api.chatwork.com/v2/rooms/${room_id}/tasks/${task_id}`,
      {
        params: getRoomTaskParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data as GetRoomTaskResponse;
  }

  /**
   * チャットのタスク一覧を取得 (※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
   */
  async getRoomTasks(
    room_id: number | string,
    getRoomTasksParam: GetRoomTasksParam,
  ) {
    const { data } = await axios.get(
      `https://api.chatwork.com/v2/rooms/${room_id}/tasks`,
      {
        params: getRoomTasksParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data as GetRoomTasksResponse;
  }

  /**
   * チャットに新しいタスクを追加
   */
  async postRoomTask(
    room_id: number | string,
    postRoomTaskParam: PostRoomTaskParam,
  ) {
    const params = new URLSearchParams();
    Object.entries(postRoomTaskParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.post(
      `https://api.chatwork.com/v2/rooms/${room_id}/tasks`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PostRoomTaskResponse;
  }

  /**
   * ファイル情報を取得
   */
  async getRoomFileInfo(
    room_id: number | string,
    file_id: number | string,
    getRoomFileInfoParam: GetRoomFileInfoParam,
  ) {
    const { data } = await axios.get(
      `https://api.chatwork.com/v2/rooms/${room_id}/files/${file_id}`,
      {
        params: getRoomFileInfoParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data as GetRoomFileInfoResponse;
  }

  /**
   * チャットのファイル一覧を取得 (※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
   */
  async getRoomFiles(
    room_id: number | string,
    getRoomFilesParam: GetRoomFilesParam,
  ) {
    const { data } = await axios.get(
      `https://api.chatwork.com/v2/rooms/${room_id}/files`,
      {
        params: getRoomFilesParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data as GetRoomFilesResponse;
  }

  /**
   * チャットに新しいファイルをアップロード
   */
  async postRoomFile(
    room_id: number | string,
    postRoomFileParam: PostRoomFileParam = {},
  ) {
    const params = new URLSearchParams();
    Object.entries(postRoomFileParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.post(
      `https://api.chatwork.com/v2/rooms/${room_id}/files`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PostRoomFileResponse;
  }

  /**
   * 招待リンクを取得する
   */
  async getRoomLink(
    room_id: number | string,
    getRoomLinkParam: GetRoomLinkParam = {},
  ) {
    const { data } = await axios.get(
      `https://api.chatwork.com/v2/rooms/${room_id}/link`,
      {
        params: getRoomLinkParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data as GetRoomLinkResponse;
  }

  /**
   * 招待リンクを作成する
   */
  async postRoomLink(
    room_id: number | string,
    postRoomLinkParam: PostRoomLinkParam,
  ) {
    const params = new URLSearchParams();
    Object.entries(postRoomLinkParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.post(
      `https://api.chatwork.com/v2/rooms/${room_id}/link`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PostRoomLinkResponse;
  }

  /**
   * 招待リンクの情報を変更する
   */
  async putRoomLink(
    room_id: number | string,
    putRoomLinkParam: PutRoomLinkParam,
  ) {
    const params = new URLSearchParams();
    Object.entries(putRoomLinkParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.put(
      `https://api.chatwork.com/v2/rooms/${room_id}/link`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PutRoomLinkResponse;
  }

  /**
   * 招待リンクを削除する
   */
  async deleteRoomLink(
    room_id: number | string,
    deleteRoomLinkParam: DeleteRoomLinkParam = {},
  ) {
    const { data } = await axios.delete(
      `https://api.chatwork.com/v2/rooms/${room_id}/link`,
      {
        params: deleteRoomLinkParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data as DeleteRoomLinkResponse;
  }

  /**
   * チャットの名前、アイコン、種類(my/direct/group)を取得
   */
  async getRoom(room_id: number | string, getRoomParam: GetRoomParam = {}) {
    const { data } = await axios.get(
      `https://api.chatwork.com/v2/rooms/${room_id}`,
      { params: getRoomParam, headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as GetRoomResponse;
  }

  /**
   * チャットの名前、アイコンをアップデート
   */
  async putRoom(room_id: number | string, putRoomParam: PutRoomParam) {
    const params = new URLSearchParams();
    Object.entries(putRoomParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.put(
      `https://api.chatwork.com/v2/rooms/${room_id}`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PutRoomResponse;
  }

  /**
   * グループチャットを退席/削除する
   */
  async deleteRoom(room_id: number | string, deleteRoomParam: DeleteRoomParam) {
    const { data } = await axios.delete(
      `https://api.chatwork.com/v2/rooms/${room_id}`,
      {
        params: deleteRoomParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data;
  }

  /**
   * 自分のチャット一覧の取得
   */
  async getRooms(getRoomsParam: GetRoomsParam = {}) {
    const { data } = await axios.get(`https://api.chatwork.com/v2/rooms`, {
      params: getRoomsParam,
      headers: { 'X-ChatWorkToken': this.api_token },
    });

    return data as GetRoomsResponse;
  }

  /**
   * グループチャットを新規作成
   */
  async postRoom(postRoomParam: PostRoomParam) {
    const params = new URLSearchParams();
    Object.entries(postRoomParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.post(
      `https://api.chatwork.com/v2/rooms`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PostRoomResponse;
  }

  /**
   * 自分に対するコンタクト承認依頼を承認する
   */
  async putIncomingRequest(
    request_id: number | string,
    putIncomingRequestParam: PutIncomingRequestParam = {},
  ) {
    const params = new URLSearchParams();
    Object.entries(putIncomingRequestParam).forEach(([key, value]) =>
      params.set(key, value),
    );

    const { data } = await axios.put(
      `https://api.chatwork.com/v2/incoming_requests/${request_id}`,
      params,
      { headers: { 'X-ChatWorkToken': this.api_token } },
    );

    return data as PutIncomingRequestResponse;
  }

  /**
   * 自分に対するコンタクト承認依頼をキャンセルする
   */
  async deleteIncomingRequest(
    request_id: number | string,
    deleteIncomingRequestParam: DeleteIncomingRequestParam = {},
  ) {
    const { data } = await axios.delete(
      `https://api.chatwork.com/v2/incoming_requests/${request_id}`,
      {
        params: deleteIncomingRequestParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data;
  }

  /**
   * 自分に対するコンタクト承認依頼一覧を取得する(※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
   */
  async getIncomingRequests(
    getIncomingRequestsParam: GetIncomingRequestsParam = {},
  ) {
    const { data } = await axios.get(
      `https://api.chatwork.com/v2/incoming_requests`,
      {
        params: getIncomingRequestsParam,
        headers: { 'X-ChatWorkToken': this.api_token },
      },
    );

    return data as GetIncomingRequestsResponse;
  }
}

/**
 * 自分自身の情報を取得
 */
export interface GetMeParam {}

/**
 * 自分の未読数、未読To数、未完了タスク数を返す
 */
export interface GetMyStatusParam {}

/**
 * 自分のタスク一覧を取得する。(※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetMyTasksParam {
  /** タスクの依頼者のアカウントID */
  assigned_by_account_id?: number;

  /** タスクのステータス */
  status?: 'open' | 'done';
}

/**
 * 自分のコンタクト一覧を取得
 */
export interface GetContactsParam {}

/**
 * チャットのメンバー一覧を取得
 */
export interface GetRoomMembersParam {}

/**
 * チャットのメンバーを一括変更
 */
export interface PutRoomMembersParam {}

/**
 * メッセージを既読にする
 */
export interface PutRoomMessagesReadParam {
  /** ここで指定するIDのメッセージまでを既読にする。すでに既読済みの場合はエラー(400) */
  message_id?: string;
}

/**
 * メッセージを未読にする
 */
export interface PutRoomMessagesUnreadParam {
  /** ここで指定するIDのメッセージ以降を未読にする */
  message_id: string;
}

/**
 * メッセージ情報を取得
 */
export interface GetRoomMessageParam {}

/**
 * チャットのメッセージを更新する。
 */
export interface PutRoomMessageParam {
  /** 更新するメッセージ本文 */
  body: string;
}

/**
 * メッセージを削除
 */
export interface DeleteRoomMessageParam {}

/**
 * チャットのメッセージ一覧を取得。パラメータ未指定だと前回取得分からの差分のみを返します。(最大100件まで取得)
 */
export interface GetRoomMessagesParam {
  /** 未取得にかかわらず最新の100件を取得するか */
  force?: 0 | 1;
}

/**
 * チャットに新しいメッセージを追加
 */
export interface PostRoomMessageParam {
  /** メッセージ本文 */
  body: string;

  /** 追加したメッセージを自分から見て未読とするか */
  self_unread?: 0 | 1;
}

/**
 * タスク完了状態を変更する
 */
export interface PutRoomTaskStatusParam {
  /** タスク完了状態 */
  body: 'open' | 'done';
}

/**
 * タスク情報を取得
 */
export interface GetRoomTaskParam {}

/**
 * チャットのタスク一覧を取得 (※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetRoomTasksParam {
  /** タスクの担当者のアカウントID */
  account_id?: number;

  /** タスクの依頼者のアカウントID */
  assigned_by_account_id?: number;

  /** タスクのステータス */
  status?: 'open' | 'done';
}

/**
 * チャットに新しいタスクを追加
 */
export interface PostRoomTaskParam {
  /** タスクの内容 */
  body: string;

  /** 担当者のアカウントID */
  to_ids: string;

  /** タスクの期限 */
  limit?: number;

  /** タスク期限の種別 */
  limit_type?: 'none' | 'date' | 'time';
}

/**
 * ファイル情報を取得
 */
export interface GetRoomFileInfoParam {
  /** ダウンロードする為のURLを生成するか */
  create_download_url?: 0 | 1;
}

/**
 * チャットのファイル一覧を取得 (※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetRoomFilesParam {
  /** アップロードしたユーザーのアカウントID */
  account_id?: number;
}

/**
 * チャットに新しいファイルをアップロード
 */
export interface PostRoomFileParam {}

/**
 * 招待リンクを取得する
 */
export interface GetRoomLinkParam {}

/**
 * 招待リンクを作成する
 */
export interface PostRoomLinkParam {
  /** リンク文字列 */
  code?: string;

  /** 承認要否 */
  need_acceptance?: 0 | 1;

  /** リンク説明文 */
  description?: string;
}

/**
 * 招待リンクの情報を変更する
 */
export interface PutRoomLinkParam {
  /** リンク文字列 */
  code?: string;

  /** 承認要否 */
  need_acceptance?: 0 | 1;

  /** リンク説明文 */
  description?: string;
}

/**
 * 招待リンクを削除する
 */
export interface DeleteRoomLinkParam {}

/**
 * チャットの名前、アイコン、種類(my/direct/group)を取得
 */
export interface GetRoomParam {}

/**
 * チャットの名前、アイコンをアップデート
 */
export interface PutRoomParam {
  /** グループチャット名 */
  name?: string;

  /** チャット概要 */
  description?: string;
}

/**
 * グループチャットを退席/削除する
 */
export interface DeleteRoomParam {
  /** 退席するか、削除するか */
  action_type: 'leave' | 'delete';
}

/**
 * 自分のチャット一覧の取得
 */
export interface GetRoomsParam {}

/**
 * グループチャットを新規作成
 */
export interface PostRoomParam {
  /** グループチャット名 */
  name: string;

  /** チャット概要 */
  description?: string;

  /** 招待リンク作成 */
  link?: 0 | 1;

  /** リンク文字列 */
  link_code?: string;

  /** 承認要否 */
  link_need_acceptance?: 0 | 1;
}

/**
 * 自分に対するコンタクト承認依頼を承認する
 */
export interface PutIncomingRequestParam {}

/**
 * 自分に対するコンタクト承認依頼をキャンセルする
 */
export interface DeleteIncomingRequestParam {}

/**
 * 自分に対するコンタクト承認依頼一覧を取得する(※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetIncomingRequestsParam {}

/**
 * 自分自身の情報を取得
 */
export interface GetMeResponse {
  account_id: number;

  room_id: number;

  name: string;

  chatwork_id: string;

  organization_id: number;

  organization_name: string;

  department: string;

  title: string;

  url: string;

  introduction: string;

  mail: string;

  tel_organization: string;

  tel_extension: string;

  tel_mobile: string;

  skype: string;

  facebook: string;

  twitter: string;

  avatar_image_url: string;

  login_mail: string;
}

/**
 * 自分の未読数、未読To数、未完了タスク数を返す
 */
export interface GetMyStatusResponse {
  unread_room_num: number;

  mention_room_num: number;

  mytask_room_num: number;

  unread_num: number;

  mention_num: number;

  mytask_num: number;
}

/**
 * 自分のタスク一覧を取得する。(※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
type GetMyTasksResponse = GetMyTasksResponseItem[];

/**
 * 自分のタスク一覧を取得する。(※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetMyTasksRoomResponse {
  room_id: number;

  name: string;

  icon_path: string;
}

/**
 * 自分のタスク一覧を取得する。(※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetMyTasksAssignedByAccountResponse {
  account_id: number;

  name: string;

  avatar_image_url: string;
}

/**
 * 自分のタスク一覧を取得する。(※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetMyTasksResponseItem {
  task_id: number;

  room: GetMyTasksRoomResponse;

  assigned_by_account: GetMyTasksAssignedByAccountResponse;

  message_id: string;

  body: string;

  limit_time: number;

  status: 'open' | 'done';

  limit_type: 'none' | 'date' | 'time';
}

/**
 * 自分のコンタクト一覧を取得
 */
type GetContactsResponse = GetContactsResponseItem[];

/**
 * 自分のコンタクト一覧を取得
 */
export interface GetContactsResponseItem {
  account_id: number;

  room_id: number;

  name: string;

  chatwork_id: string;

  organization_id: number;

  organization_name: string;

  department: string;

  avatar_image_url: string;
}

/**
 * チャットのメンバー一覧を取得
 */
type GetRoomMembersResponse = GetRoomMembersResponseItem[];

/**
 * チャットのメンバー一覧を取得
 */
export interface GetRoomMembersResponseItem {
  account_id: number;

  role: 'admin' | 'member' | 'readonly';

  name: string;

  chatwork_id: string;

  organization_id: number;

  organization_name: string;

  department: string;

  avatar_image_url: string;
}

/**
 * チャットのメンバーを一括変更
 */
export interface PutRoomMembersResponse {
  admin: number[];

  member: number[];

  readonly: number[];
}

/**
 * メッセージを既読にする
 */
export interface PutRoomMessagesReadResponse {
  unread_num: number;

  mention_num: number;
}

/**
 * メッセージを未読にする
 */
export interface PutRoomMessagesUnreadResponse {
  unread_num: number;

  mention_num: number;
}

/**
 * メッセージ情報を取得
 */
export interface GetRoomMessageAccountResponse {
  account_id: number;

  name: string;

  avatar_image_url: string;
}

/**
 * メッセージ情報を取得
 */
export interface GetRoomMessageResponse {
  message_id: string;

  account: GetRoomMessageAccountResponse;

  body: string;

  send_time: number;

  update_time: number;
}

/**
 * チャットのメッセージを更新する。
 */
export interface PutRoomMessageResponse {
  message_id: string;
}

/**
 * メッセージを削除
 */
export interface DeleteRoomMessageResponse {
  message_id: string;
}

/**
 * チャットのメッセージ一覧を取得。パラメータ未指定だと前回取得分からの差分のみを返します。(最大100件まで取得)
 */
type GetRoomMessagesResponse = GetRoomMessagesResponseItem[];

/**
 * チャットのメッセージ一覧を取得。パラメータ未指定だと前回取得分からの差分のみを返します。(最大100件まで取得)
 */
export interface GetRoomMessagesAccountResponse {
  account_id: number;

  name: string;

  avatar_image_url: string;
}

/**
 * チャットのメッセージ一覧を取得。パラメータ未指定だと前回取得分からの差分のみを返します。(最大100件まで取得)
 */
export interface GetRoomMessagesResponseItem {
  message_id: string;

  account: GetRoomMessagesAccountResponse;

  body: string;

  send_time: number;

  update_time: number;
}

/**
 * チャットに新しいメッセージを追加
 */
export interface PostRoomMessageResponse {
  message_id: string;
}

/**
 * タスク完了状態を変更する
 */
export interface PutRoomTaskStatusResponse {
  task_id: number;
}

/**
 * タスク情報を取得
 */
export interface GetRoomTaskAccountResponse {
  account_id: number;

  name: string;

  avatar_image_url: string;
}

/**
 * タスク情報を取得
 */
export interface GetRoomTaskAssignedByAccountResponse {
  account_id: number;

  name: string;

  avatar_image_url: string;
}

/**
 * タスク情報を取得
 */
export interface GetRoomTaskResponse {
  task_id: number;

  account: GetRoomTaskAccountResponse;

  assigned_by_account: GetRoomTaskAssignedByAccountResponse;

  message_id: string;

  body: string;

  limit_time: number;

  status: 'open' | 'done';

  limit_type: 'none' | 'date' | 'time';
}

/**
 * チャットのタスク一覧を取得 (※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
type GetRoomTasksResponse = GetRoomTasksResponseItem[];

/**
 * チャットのタスク一覧を取得 (※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetRoomTasksAccountResponse {
  account_id: number;

  name: string;

  avatar_image_url: string;
}

/**
 * チャットのタスク一覧を取得 (※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetRoomTasksAssignedByAccountResponse {
  account_id: number;

  name: string;

  avatar_image_url: string;
}

/**
 * チャットのタスク一覧を取得 (※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetRoomTasksResponseItem {
  task_id: number;

  account: GetRoomTasksAccountResponse;

  assigned_by_account: GetRoomTasksAssignedByAccountResponse;

  message_id: string;

  body: string;

  limit_time: number;

  status: 'open' | 'done';

  limit_type: 'none' | 'date' | 'time';
}

/**
 * チャットに新しいタスクを追加
 */
export interface PostRoomTaskResponse {
  task_ids: number[];
}

/**
 * ファイル情報を取得
 */
export interface GetRoomFileInfoAccountResponse {
  account_id: number;

  name: string;

  avatar_image_url: string;
}

/**
 * ファイル情報を取得
 */
export interface GetRoomFileInfoResponse {
  file_id: number;

  account: GetRoomFileInfoAccountResponse;

  message_id: string;

  filename: string;

  filesize: number;

  upload_time: number;

  download_url: string;
}

/**
 * チャットのファイル一覧を取得 (※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
type GetRoomFilesResponse = GetRoomFilesResponseItem[];

/**
 * チャットのファイル一覧を取得 (※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetRoomFilesAccountResponse {
  account_id: number;

  name: string;

  avatar_image_url: string;
}

/**
 * チャットのファイル一覧を取得 (※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetRoomFilesResponseItem {
  file_id: number;

  account: GetRoomFilesAccountResponse;

  message_id: string;

  filename: string;

  filesize: number;

  upload_time: number;
}

/**
 * 招待リンクを取得する
 */
export interface GetRoomLinkResponse {
  public: 0 | 1;

  url: string;

  need_acceptance: 0 | 1;

  description: string;
}

/**
 * チャットの名前、アイコン、種類(my/direct/group)を取得
 */
export interface GetRoomResponse {
  room_id: number;

  name: string;

  type: 'my' | 'direct' | 'group';

  role: 'admin' | 'member' | 'readonly';

  sticky: 0 | 1;

  unread_num: number;

  mention_num: number;

  mytask_num: number;

  message_num: number;

  file_num: number;

  task_num: number;

  icon_path: string;

  last_update_time: number;

  description: string;
}

/**
 * チャットの名前、アイコンをアップデート
 */
export interface PutRoomResponse {
  room_id: number;
}

/**
 * 自分のチャット一覧の取得
 */
type GetRoomsResponse = GetRoomsResponseItem[];

/**
 * 自分のチャット一覧の取得
 */
export interface GetRoomsResponseItem {
  room_id: number;

  name: string;

  type: 'my' | 'direct' | 'group';

  role: 'admin' | 'member' | 'readonly';

  sticky: 0 | 1;

  unread_num: number;

  mention_num: number;

  mytask_num: number;

  message_num: number;

  file_num: number;

  task_num: number;

  icon_path: string;

  last_update_time: number;
}

/**
 * グループチャットを新規作成
 */
export interface PostRoomResponse {
  room_id: number;
}

/**
 * 自分に対するコンタクト承認依頼を承認する
 */
export interface PutIncomingRequestResponse {
  account_id: number;

  room_id: number;

  name: string;

  chatwork_id: string;

  organization_id: number;

  organization_name: string;

  department: string;

  avatar_image_url: string;
}

/**
 * 自分に対するコンタクト承認依頼一覧を取得する(※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
type GetIncomingRequestsResponse = GetIncomingRequestsResponseItem[];

/**
 * 自分に対するコンタクト承認依頼一覧を取得する(※100件まで取得可能。今後、より多くのデータを取得する為のページネーションの仕組みを提供予定)
 */
export interface GetIncomingRequestsResponseItem {
  request_id: number;

  account_id: number;

  message: string;

  name: string;

  chatwork_id: string;

  organization_id: number;

  organization_name: string;

  department: string;

  avatar_image_url: string;
}

export interface PostRoomFileResponse {
  file_id: number;
}

export interface PostRoomLinkResponse {
  public: boolean;
  url: string;
  need_acceptance: boolean;
  description: string;
}

export interface PutRoomLinkResponse {
  public: boolean;
  url: string;
  need_acceptance: boolean;
  description: string;
}

export interface DeleteRoomLinkResponse {
  public: boolean;
}

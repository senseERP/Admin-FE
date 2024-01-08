export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Long: { input: any; output: any; }
  TimeSpan: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** A connection to a list of items. */
export type AnalysesConnection = {
  __typename?: 'AnalysesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AnalysesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Analysis>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type AnalysesEdge = {
  __typename?: 'AnalysesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Analysis;
};

export type Analysis = {
  __typename?: 'Analysis';
  attachments: Array<Attachment>;
  author?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  gitUrl?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Attachment>;
  id: Scalars['UUID']['output'];
  includedSequences?: Maybe<Scalars['String']['output']>;
  inputs: Array<AnalysisInfo>;
  longestSequence?: Maybe<Scalars['Float']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  moduleCommit?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  numberOfSequences?: Maybe<Scalars['Float']['output']>;
  outputs: Array<AnalysisInfo>;
  overview?: Maybe<Scalars['String']['output']>;
  parameters: Array<AnalysisInfo>;
  relatedPublications: Array<AnalysisPublication>;
  sampleRuns: Array<SampleRun>;
  sdk?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  totalBases?: Maybe<Scalars['Float']['output']>;
};

export type AnalysisFilterInput = {
  and?: InputMaybe<Array<AnalysisFilterInput>>;
  attachments?: InputMaybe<ListFilterInputTypeOfAttachmentFilterInput>;
  author?: InputMaybe<StringOperationFilterInput>;
  created?: InputMaybe<DateTimeOperationFilterInput>;
  gitUrl?: InputMaybe<StringOperationFilterInput>;
  icon?: InputMaybe<AttachmentFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  includedSequences?: InputMaybe<StringOperationFilterInput>;
  inputs?: InputMaybe<ListFilterInputTypeOfAnalysisInfoFilterInput>;
  longestSequence?: InputMaybe<FloatOperationFilterInput>;
  method?: InputMaybe<StringOperationFilterInput>;
  moduleCommit?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  numberOfSequences?: InputMaybe<FloatOperationFilterInput>;
  or?: InputMaybe<Array<AnalysisFilterInput>>;
  outputs?: InputMaybe<ListFilterInputTypeOfAnalysisInfoFilterInput>;
  overview?: InputMaybe<StringOperationFilterInput>;
  parameters?: InputMaybe<ListFilterInputTypeOfAnalysisInfoFilterInput>;
  relatedPublications?: InputMaybe<ListFilterInputTypeOfAnalysisPublicationFilterInput>;
  sampleRuns?: InputMaybe<ListFilterInputTypeOfSampleRunFilterInput>;
  sdk?: InputMaybe<StringOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  totalBases?: InputMaybe<FloatOperationFilterInput>;
};

export type AnalysisInfo = {
  __typename?: 'AnalysisInfo';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  title: Scalars['String']['output'];
};

export type AnalysisInfoFilterInput = {
  and?: InputMaybe<Array<AnalysisInfoFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<AnalysisInfoFilterInput>>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type AnalysisInfoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type AnalysisPublication = {
  __typename?: 'AnalysisPublication';
  id: Scalars['UUID']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type AnalysisPublicationFilterInput = {
  and?: InputMaybe<Array<AnalysisPublicationFilterInput>>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<AnalysisPublicationFilterInput>>;
  title?: InputMaybe<StringOperationFilterInput>;
  url?: InputMaybe<StringOperationFilterInput>;
};

export type AnalysisPublicationInput = {
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type AnalysisSortInput = {
  author?: InputMaybe<SortEnumType>;
  created?: InputMaybe<SortEnumType>;
  gitUrl?: InputMaybe<SortEnumType>;
  icon?: InputMaybe<AttachmentSortInput>;
  id?: InputMaybe<SortEnumType>;
  includedSequences?: InputMaybe<SortEnumType>;
  longestSequence?: InputMaybe<SortEnumType>;
  method?: InputMaybe<SortEnumType>;
  moduleCommit?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  numberOfSequences?: InputMaybe<SortEnumType>;
  overview?: InputMaybe<SortEnumType>;
  sdk?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  totalBases?: InputMaybe<SortEnumType>;
};

export type AppTenantInfo = {
  __typename?: 'AppTenantInfo';
  connectionString: Scalars['String']['output'];
  email: Scalars['String']['output'];
  freeMonth?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  maximumGiga?: Maybe<Scalars['Long']['output']>;
  name: Scalars['String']['output'];
  payments: Array<Payment>;
  validUpto: Scalars['DateTime']['output'];
};

export type AppTenantInfoFilterInput = {
  and?: InputMaybe<Array<AppTenantInfoFilterInput>>;
  connectionString?: InputMaybe<StringOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  freeMonth?: InputMaybe<BooleanOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  identifier?: InputMaybe<StringOperationFilterInput>;
  isActive?: InputMaybe<BooleanOperationFilterInput>;
  maximumGiga?: InputMaybe<LongOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AppTenantInfoFilterInput>>;
  payments?: InputMaybe<ListFilterInputTypeOfPaymentFilterInput>;
  validUpto?: InputMaybe<DateTimeOperationFilterInput>;
};

export type AppTenantInfoSortInput = {
  connectionString?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  freeMonth?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  identifier?: InputMaybe<SortEnumType>;
  isActive?: InputMaybe<SortEnumType>;
  maximumGiga?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  validUpto?: InputMaybe<SortEnumType>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER',
  Validation = 'VALIDATION'
}

export type Attachment = {
  __typename?: 'Attachment';
  contentType: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  identifier: Scalars['UUID']['output'];
  length: Scalars['Long']['output'];
  mail?: Maybe<Mail>;
  objectKey: Scalars['String']['output'];
  sample?: Maybe<Sample>;
  sampleRunOutput?: Maybe<SampleRun>;
  url: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type AttachmentFilterInput = {
  and?: InputMaybe<Array<AttachmentFilterInput>>;
  contentType?: InputMaybe<StringOperationFilterInput>;
  fileName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  identifier?: InputMaybe<UuidOperationFilterInput>;
  length?: InputMaybe<LongOperationFilterInput>;
  mail?: InputMaybe<MailFilterInput>;
  objectKey?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AttachmentFilterInput>>;
  sample?: InputMaybe<SampleFilterInput>;
  sampleRunOutput?: InputMaybe<SampleRunFilterInput>;
  user?: InputMaybe<UserFilterInput>;
};

export type AttachmentInput = {
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  identifier: Scalars['UUID']['input'];
  length: Scalars['Long']['input'];
};

export type AttachmentSortInput = {
  contentType?: InputMaybe<SortEnumType>;
  fileName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  identifier?: InputMaybe<SortEnumType>;
  length?: InputMaybe<SortEnumType>;
  mail?: InputMaybe<MailSortInput>;
  objectKey?: InputMaybe<SortEnumType>;
  sample?: InputMaybe<SampleSortInput>;
  sampleRunOutput?: InputMaybe<SampleRunSortInput>;
  user?: InputMaybe<UserSortInput>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  refreshToken: Scalars['String']['output'];
  tenant: Scalars['String']['output'];
  token: Scalars['String']['output'];
  userId: Scalars['UUID']['output'];
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChangePasswordInput = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type CheckoutResponse = {
  __typename?: 'CheckoutResponse';
  pubKey: Scalars['String']['output'];
  sessionId: Scalars['String']['output'];
};

export enum Classifier {
  Blast = 'BLAST',
  VSearch = 'V_SEARCH'
}

export type CompleteMultipartInput = {
  eTagInputs: Array<ETagInput>;
  fileKey: Scalars['String']['input'];
  uploadId: Scalars['String']['input'];
};

export type CreateAnalysisInput = {
  attachments: Array<AttachmentInput>;
  author?: InputMaybe<Scalars['String']['input']>;
  created: Scalars['DateTime']['input'];
  gitUrl?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<AttachmentInput>;
  includedSequences?: InputMaybe<Scalars['String']['input']>;
  inputs: Array<AnalysisInfoInput>;
  longestSequence?: InputMaybe<Scalars['Float']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  moduleCommit?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  numberOfSequences?: InputMaybe<Scalars['Float']['input']>;
  outputs: Array<AnalysisInfoInput>;
  overview?: InputMaybe<Scalars['String']['input']>;
  parameters: Array<AnalysisInfoInput>;
  relatedPublications: Array<AnalysisPublicationInput>;
  sdk?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  totalBases?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateCustomerStripeInput = {
  email: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateLabelInput = {
  backgroundColor: Scalars['String']['input'];
  name: Scalars['String']['input'];
  textColor: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMailInput = {
  attachments: Array<AttachmentInput>;
  body: Scalars['String']['input'];
  sendTo: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type CreateNoteInput = {
  attachments: Array<AttachmentInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  sampleId?: InputMaybe<Scalars['UUID']['input']>;
  sampleRunId?: InputMaybe<Scalars['UUID']['input']>;
};

export type CreatePaymentInput = {
  packageId: Scalars['String']['input'];
  quantitySubValue?: InputMaybe<Scalars['Long']['input']>;
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateSampleInput = {
  extraEndsTrim?: InputMaybe<Scalars['Float']['input']>;
  inputAttachments: Array<AttachmentInput>;
  labels?: InputMaybe<Array<Scalars['UUID']['input']>>;
  maxNumReads?: InputMaybe<Scalars['Float']['input']>;
  maxReadLength?: InputMaybe<Scalars['Float']['input']>;
  minQuantity?: InputMaybe<Scalars['Float']['input']>;
  minReadLength?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  status: SampleStatus;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSampleRunInput = {
  analysisId?: InputMaybe<Scalars['UUID']['input']>;
  appVersion?: InputMaybe<Scalars['String']['input']>;
  checkM2Threads?: InputMaybe<Scalars['Float']['input']>;
  classifier?: InputMaybe<Classifier>;
  clusteringSimilarityThreshold?: InputMaybe<Scalars['Float']['input']>;
  completenessAwareMinCompleteness?: InputMaybe<Scalars['Float']['input']>;
  completenessAwareMinLength?: InputMaybe<Scalars['Float']['input']>;
  dastoolScoreThreshold?: InputMaybe<Scalars['Float']['input']>;
  dastoolSearch?: InputMaybe<Scalars['String']['input']>;
  dastoolThreads?: InputMaybe<Scalars['Float']['input']>;
  dbSequence?: InputMaybe<Scalars['String']['input']>;
  dbTaxonomy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exportUnassignedRead?: InputMaybe<Scalars['Boolean']['input']>;
  fastaQuery?: InputMaybe<Scalars['String']['input']>;
  filtersMaxContamination?: InputMaybe<Scalars['Float']['input']>;
  filtersMaxContigs?: InputMaybe<Scalars['Float']['input']>;
  filtersMinCompleteness?: InputMaybe<Scalars['Float']['input']>;
  genomeSize?: InputMaybe<Scalars['Float']['input']>;
  gtdbtkThreads?: InputMaybe<Scalars['Float']['input']>;
  isClustered?: InputMaybe<Scalars['Boolean']['input']>;
  kraken2Db?: InputMaybe<Scalars['String']['input']>;
  log: Scalars['String']['input'];
  longReadsLibrary?: InputMaybe<Scalars['String']['input']>;
  maxAccepts?: InputMaybe<Scalars['Float']['input']>;
  metaBatMinContigSize?: InputMaybe<Scalars['Float']['input']>;
  metaBatThreads?: InputMaybe<Scalars['Float']['input']>;
  minIdThreshold?: InputMaybe<Scalars['Float']['input']>;
  minQueryCoverage?: InputMaybe<Scalars['Float']['input']>;
  minimapThreads?: InputMaybe<Scalars['Float']['input']>;
  numberOfReadsSubSampled?: InputMaybe<Scalars['Float']['input']>;
  numberOfThreads?: InputMaybe<Scalars['Float']['input']>;
  outputAttachments?: InputMaybe<Array<AttachmentInput>>;
  pacbioAnnotationSamples?: InputMaybe<Array<Scalars['String']['input']>>;
  pacbioAssemble?: InputMaybe<Scalars['String']['input']>;
  pacbioSample?: InputMaybe<Scalars['String']['input']>;
  pairedEndShortReadsLibrary?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  queryToSearch?: InputMaybe<Scalars['String']['input']>;
  resultFolder?: InputMaybe<Scalars['String']['input']>;
  sampleId: Scalars['UUID']['input'];
  semibinModel?: InputMaybe<Scalars['String']['input']>;
  semibinThreads?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpairedShortReadsLibrary?: InputMaybe<Scalars['String']['input']>;
  workFolder?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSubscribeInput = {
  email: Scalars['String']['input'];
  quantity: Scalars['Long']['input'];
  tenantId: Scalars['String']['input'];
  token: Scalars['String']['input'];
  type: PlanType;
};

export type CreateTenantInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender: Gender;
  identifier: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  tenantName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateTicketInput = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<AttachmentInput>;
  dateOfBirth: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  emailAppPassword?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  gender: Gender;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  roles?: InputMaybe<Array<Scalars['UUID']['input']>>;
  username: Scalars['String']['input'];
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ETagInput = {
  eTag: Scalars['String']['input'];
  partNumber: Scalars['Int']['input'];
};

export type ExtendTenantInput = {
  identifier: Scalars['String']['input'];
  validUpto: Scalars['DateTime']['input'];
};

export type FileInfoInput = {
  fileName: Scalars['String']['input'];
  identifier: Scalars['UUID']['input'];
};

export type FloatOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  ngt?: InputMaybe<Scalars['Float']['input']>;
  ngte?: InputMaybe<Scalars['Float']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  nlt?: InputMaybe<Scalars['Float']['input']>;
  nlte?: InputMaybe<Scalars['Float']['input']>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
  PreferNotToSay = 'PREFER_NOT_TO_SAY'
}

export type GenderOperationFilterInput = {
  eq?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  neq?: InputMaybe<Gender>;
  nin?: InputMaybe<Array<Gender>>;
};

export type GenerateMultipartPreSignUrlsInput = {
  fileName: Scalars['String']['input'];
  identifier: Scalars['UUID']['input'];
  length: Scalars['Long']['input'];
};

export type GeneratePreSignUrlsInput = {
  files: Array<FileInfoInput>;
};

export enum InvoiceStatus {
  Cancel = 'CANCEL',
  Paid = 'PAID',
  Waiting = 'WAITING'
}

export type Label = {
  __typename?: 'Label';
  backgroundColor: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  sampleLabels: Array<SampleLabel>;
  textColor: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['UUID']['output'];
};


export type LabelSampleLabelsArgs = {
  order?: InputMaybe<Array<SampleLabelSortInput>>;
};

export type LabelFilterInput = {
  and?: InputMaybe<Array<LabelFilterInput>>;
  backgroundColor?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<LabelFilterInput>>;
  sampleLabels?: InputMaybe<ListFilterInputTypeOfSampleLabelFilterInput>;
  textColor?: InputMaybe<StringOperationFilterInput>;
  type?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<UuidOperationFilterInput>;
};

export type LabelSortInput = {
  backgroundColor?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  textColor?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type LabelTypesConnection = {
  __typename?: 'LabelTypesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<LabelTypesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type LabelTypesEdge = {
  __typename?: 'LabelTypesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type LabelsConnection = {
  __typename?: 'LabelsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<LabelsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Label>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type LabelsEdge = {
  __typename?: 'LabelsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Label;
};

export type ListFilterInputTypeOfAnalysisInfoFilterInput = {
  all?: InputMaybe<AnalysisInfoFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<AnalysisInfoFilterInput>;
  some?: InputMaybe<AnalysisInfoFilterInput>;
};

export type ListFilterInputTypeOfAnalysisPublicationFilterInput = {
  all?: InputMaybe<AnalysisPublicationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<AnalysisPublicationFilterInput>;
  some?: InputMaybe<AnalysisPublicationFilterInput>;
};

export type ListFilterInputTypeOfAttachmentFilterInput = {
  all?: InputMaybe<AttachmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<AttachmentFilterInput>;
  some?: InputMaybe<AttachmentFilterInput>;
};

export type ListFilterInputTypeOfLabelFilterInput = {
  all?: InputMaybe<LabelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<LabelFilterInput>;
  some?: InputMaybe<LabelFilterInput>;
};

export type ListFilterInputTypeOfMailFilterInput = {
  all?: InputMaybe<MailFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<MailFilterInput>;
  some?: InputMaybe<MailFilterInput>;
};

export type ListFilterInputTypeOfNoteFilterInput = {
  all?: InputMaybe<NoteFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<NoteFilterInput>;
  some?: InputMaybe<NoteFilterInput>;
};

export type ListFilterInputTypeOfNotificationObjectDataFilterInput = {
  all?: InputMaybe<NotificationObjectDataFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<NotificationObjectDataFilterInput>;
  some?: InputMaybe<NotificationObjectDataFilterInput>;
};

export type ListFilterInputTypeOfNotificationObjectFilterInput = {
  all?: InputMaybe<NotificationObjectFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<NotificationObjectFilterInput>;
  some?: InputMaybe<NotificationObjectFilterInput>;
};

export type ListFilterInputTypeOfPaymentFilterInput = {
  all?: InputMaybe<PaymentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PaymentFilterInput>;
  some?: InputMaybe<PaymentFilterInput>;
};

export type ListFilterInputTypeOfPermissionFilterInput = {
  all?: InputMaybe<PermissionFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<PermissionFilterInput>;
  some?: InputMaybe<PermissionFilterInput>;
};

export type ListFilterInputTypeOfProjectFilterInput = {
  all?: InputMaybe<ProjectFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ProjectFilterInput>;
  some?: InputMaybe<ProjectFilterInput>;
};

export type ListFilterInputTypeOfSampleFilterInput = {
  all?: InputMaybe<SampleFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SampleFilterInput>;
  some?: InputMaybe<SampleFilterInput>;
};

export type ListFilterInputTypeOfSampleLabelFilterInput = {
  all?: InputMaybe<SampleLabelFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SampleLabelFilterInput>;
  some?: InputMaybe<SampleLabelFilterInput>;
};

export type ListFilterInputTypeOfSampleRunFilterInput = {
  all?: InputMaybe<SampleRunFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SampleRunFilterInput>;
  some?: InputMaybe<SampleRunFilterInput>;
};

export type ListFilterInputTypeOfSampleRunParamFilterInput = {
  all?: InputMaybe<SampleRunParamFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<SampleRunParamFilterInput>;
  some?: InputMaybe<SampleRunParamFilterInput>;
};

export type ListFilterInputTypeOfUserNotificationFilterInput = {
  all?: InputMaybe<UserNotificationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<UserNotificationFilterInput>;
  some?: InputMaybe<UserNotificationFilterInput>;
};

export type ListFilterInputTypeOfUserRoleFilterInput = {
  all?: InputMaybe<UserRoleFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<UserRoleFilterInput>;
  some?: InputMaybe<UserRoleFilterInput>;
};

export type LoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LongOperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  neq?: InputMaybe<Scalars['Long']['input']>;
  ngt?: InputMaybe<Scalars['Long']['input']>;
  ngte?: InputMaybe<Scalars['Long']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  nlt?: InputMaybe<Scalars['Long']['input']>;
  nlte?: InputMaybe<Scalars['Long']['input']>;
};

export type Mail = {
  __typename?: 'Mail';
  attachments: Array<Attachment>;
  body: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  sendTo: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  user: User;
};

export type MailFilterInput = {
  and?: InputMaybe<Array<MailFilterInput>>;
  attachments?: InputMaybe<ListFilterInputTypeOfAttachmentFilterInput>;
  body?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<MailFilterInput>>;
  sendTo?: InputMaybe<StringOperationFilterInput>;
  subject?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
};

export type MailSortInput = {
  body?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  sendTo?: InputMaybe<SortEnumType>;
  subject?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
};

/** A connection to a list of items. */
export type MailsConnection = {
  __typename?: 'MailsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<MailsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Mail>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type MailsEdge = {
  __typename?: 'MailsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Mail;
};

export type MultipartPreSignUrlPayload = {
  __typename?: 'MultipartPreSignUrlPayload';
  expires: Scalars['DateTime']['output'];
  fileKey: Scalars['String']['output'];
  uploadId: Scalars['String']['output'];
  urls: Array<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  abortMultipartPreSignedUrls: Scalars['Boolean']['output'];
  callback: Scalars['String']['output'];
  canceledTicket: Scalars['Boolean']['output'];
  changePassword: Scalars['Boolean']['output'];
  changePasswordTenant: Scalars['Boolean']['output'];
  completeMultipartPreSignUrls: Scalars['Boolean']['output'];
  completedTicket: Scalars['Boolean']['output'];
  conflictTenantEmail: Scalars['Boolean']['output'];
  conflictTenantIdentifier: Scalars['Boolean']['output'];
  createAnalysis?: Maybe<Analysis>;
  createCustomerStripe: CheckoutResponse;
  createLabel?: Maybe<Label>;
  createMail?: Maybe<Mail>;
  createNote?: Maybe<Note>;
  createPayment?: Maybe<CheckoutResponse>;
  createPaymentIntent: PaymentIntentPayload;
  createProject?: Maybe<Project>;
  createSample?: Maybe<Sample>;
  createSampleRun?: Maybe<SampleRun>;
  createSubscribe?: Maybe<SubscribeResponse>;
  createTenant: TenantPayload;
  createTicket?: Maybe<Ticket>;
  createUser?: Maybe<User>;
  deleteAnalysis: Scalars['Boolean']['output'];
  deleteLabel: Scalars['Boolean']['output'];
  deleteNote: Scalars['Boolean']['output'];
  deleteProject: Scalars['Boolean']['output'];
  deleteSample: Scalars['Boolean']['output'];
  deleteSampleRun: Scalars['Boolean']['output'];
  deleteTicket: Scalars['Boolean']['output'];
  deleteTicketTenant: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  demoNotification: Scalars['Boolean']['output'];
  extendTenant: TenantPayload;
  failedSampleRun: Scalars['Boolean']['output'];
  failedTicket: Scalars['Boolean']['output'];
  generateMultipartPreSignUrls: MultipartPreSignUrlPayload;
  generatePreSignUrls: Array<PreSignUrlPayload>;
  login: AuthPayload;
  loginTenant: AuthPayload;
  notSyncedSampleRun: Scalars['Boolean']['output'];
  readAllNotification: Scalars['Boolean']['output'];
  readNotification: Scalars['Boolean']['output'];
  refreshToken: AuthPayload;
  refreshTokenTenant: AuthPayload;
  runningSampleRun: Scalars['Boolean']['output'];
  signUp: AuthPayload;
  signUpTenant: TenantPayload;
  solvingTicket: Scalars['Boolean']['output'];
  successfulSampleRun: Scalars['Boolean']['output'];
  updateAnalysis?: Maybe<Analysis>;
  updateLabel?: Maybe<Label>;
  updateNote?: Maybe<Note>;
  updateProfile?: Maybe<User>;
  updateProject?: Maybe<Project>;
  updateSample?: Maybe<Sample>;
  updateSampleRun?: Maybe<SampleRun>;
  updateSampleRunLog?: Maybe<SampleRun>;
  updateSubscribe?: Maybe<SubscribeResponse>;
  updateUser?: Maybe<User>;
};


export type MutationAbortMultipartPreSignedUrlsArgs = {
  input: CompleteMultipartInput;
};


export type MutationCallbackArgs = {
  sessionId: Scalars['String']['input'];
};


export type MutationCanceledTicketArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationChangePasswordTenantArgs = {
  input: ChangePasswordInput;
};


export type MutationCompleteMultipartPreSignUrlsArgs = {
  input: CompleteMultipartInput;
};


export type MutationCompletedTicketArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationConflictTenantEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationConflictTenantIdentifierArgs = {
  identifier: Scalars['String']['input'];
};


export type MutationCreateAnalysisArgs = {
  input: CreateAnalysisInput;
};


export type MutationCreateCustomerStripeArgs = {
  input: CreateCustomerStripeInput;
};


export type MutationCreateLabelArgs = {
  input: CreateLabelInput;
};


export type MutationCreateMailArgs = {
  input: CreateMailInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};


export type MutationCreatePaymentIntentArgs = {
  amount: Scalars['Long']['input'];
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateSampleArgs = {
  input: CreateSampleInput;
};


export type MutationCreateSampleRunArgs = {
  input: CreateSampleRunInput;
};


export type MutationCreateSubscribeArgs = {
  input: CreateSubscribeInput;
};


export type MutationCreateTenantArgs = {
  input: CreateTenantInput;
};


export type MutationCreateTicketArgs = {
  input: CreateTicketInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteAnalysisArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteLabelArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteNoteArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteSampleArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteSampleRunArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteTicketArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteTicketTenantArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationExtendTenantArgs = {
  input: ExtendTenantInput;
};


export type MutationFailedSampleRunArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationFailedTicketArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationGenerateMultipartPreSignUrlsArgs = {
  input: GenerateMultipartPreSignUrlsInput;
};


export type MutationGeneratePreSignUrlsArgs = {
  input: GeneratePreSignUrlsInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLoginTenantArgs = {
  input: LoginInput;
};


export type MutationNotSyncedSampleRunArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationReadNotificationArgs = {
  notificationId: Scalars['UUID']['input'];
};


export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};


export type MutationRefreshTokenTenantArgs = {
  input: RefreshTokenInput;
};


export type MutationRunningSampleRunArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSignUpTenantArgs = {
  input: SignUpTenantInput;
};


export type MutationSolvingTicketArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationSuccessfulSampleRunArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationUpdateAnalysisArgs = {
  input: UpdateAnalysisInput;
};


export type MutationUpdateLabelArgs = {
  input: UpdateLabelInput;
};


export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


export type MutationUpdateSampleArgs = {
  input: UpdateSampleInput;
};


export type MutationUpdateSampleRunArgs = {
  input: UpdateSampleRunInput;
};


export type MutationUpdateSampleRunLogArgs = {
  input: UpdateSampleRunLogInput;
};


export type MutationUpdateSubscribeArgs = {
  subscriptionId: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Note = {
  __typename?: 'Note';
  attachments: Array<Attachment>;
  children: Array<Note>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletable: Scalars['Boolean']['output'];
  id: Scalars['UUID']['output'];
  parent?: Maybe<Note>;
  parentId?: Maybe<Scalars['UUID']['output']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['UUID']['output']>;
  sample?: Maybe<Sample>;
  sampleId?: Maybe<Scalars['UUID']['output']>;
  sampleRun?: Maybe<SampleRun>;
  sampleRunId?: Maybe<Scalars['UUID']['output']>;
  user: User;
  userId: Scalars['UUID']['output'];
};

export type NoteFilterInput = {
  and?: InputMaybe<Array<NoteFilterInput>>;
  attachments?: InputMaybe<ListFilterInputTypeOfAttachmentFilterInput>;
  children?: InputMaybe<ListFilterInputTypeOfNoteFilterInput>;
  content?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<NoteFilterInput>>;
  parent?: InputMaybe<NoteFilterInput>;
  parentId?: InputMaybe<UuidOperationFilterInput>;
  project?: InputMaybe<ProjectFilterInput>;
  projectId?: InputMaybe<UuidOperationFilterInput>;
  sample?: InputMaybe<SampleFilterInput>;
  sampleId?: InputMaybe<UuidOperationFilterInput>;
  sampleRun?: InputMaybe<SampleRunFilterInput>;
  sampleRunId?: InputMaybe<UuidOperationFilterInput>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<UuidOperationFilterInput>;
};

export type NoteSortInput = {
  content?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  parent?: InputMaybe<NoteSortInput>;
  parentId?: InputMaybe<SortEnumType>;
  project?: InputMaybe<ProjectSortInput>;
  projectId?: InputMaybe<SortEnumType>;
  sample?: InputMaybe<SampleSortInput>;
  sampleId?: InputMaybe<SortEnumType>;
  sampleRun?: InputMaybe<SampleRunSortInput>;
  sampleRunId?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type NotesConnection = {
  __typename?: 'NotesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<NotesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Note>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type NotesEdge = {
  __typename?: 'NotesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Note;
};

export type Notification = {
  __typename?: 'Notification';
  action: NotificationAction;
  directObject?: Maybe<NotificationObject>;
  id: Scalars['UUID']['output'];
  indirectObject?: Maybe<NotificationObject>;
  isRead: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  path: Scalars['String']['output'];
  prepositionalObject?: Maybe<NotificationObject>;
  rawMessage: Scalars['String']['output'];
  subjects: Array<NotificationObject>;
  timestamp: Scalars['DateTime']['output'];
  userNotifications: Array<UserNotification>;
};

export enum NotificationAction {
  Default = 'DEFAULT',
  PaymentFailed = 'PAYMENT_FAILED',
  SampleRunFail = 'SAMPLE_RUN_FAIL',
  SampleRunSuccess = 'SAMPLE_RUN_SUCCESS'
}

export type NotificationActionOperationFilterInput = {
  eq?: InputMaybe<NotificationAction>;
  in?: InputMaybe<Array<NotificationAction>>;
  neq?: InputMaybe<NotificationAction>;
  nin?: InputMaybe<Array<NotificationAction>>;
};

export type NotificationFilterInput = {
  action?: InputMaybe<NotificationActionOperationFilterInput>;
  and?: InputMaybe<Array<NotificationFilterInput>>;
  directObject?: InputMaybe<NotificationObjectFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  indirectObject?: InputMaybe<NotificationObjectFilterInput>;
  key?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<NotificationFilterInput>>;
  path?: InputMaybe<StringOperationFilterInput>;
  prepositionalObject?: InputMaybe<NotificationObjectFilterInput>;
  subjects?: InputMaybe<ListFilterInputTypeOfNotificationObjectFilterInput>;
  timestamp?: InputMaybe<DateTimeOperationFilterInput>;
  userNotifications?: InputMaybe<ListFilterInputTypeOfUserNotificationFilterInput>;
};

export type NotificationObject = {
  __typename?: 'NotificationObject';
  data: Array<NotificationObjectData>;
  directObjectNotification?: Maybe<Notification>;
  id: Scalars['UUID']['output'];
  indirectObjectNotification?: Maybe<Notification>;
  key: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  prepositionalObjectNotification?: Maybe<Notification>;
  subjectNotification?: Maybe<Notification>;
  type: NotificationObjectType;
};

export type NotificationObjectData = {
  __typename?: 'NotificationObjectData';
  data: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  notificationObject: NotificationObject;
};

export type NotificationObjectDataFilterInput = {
  and?: InputMaybe<Array<NotificationObjectDataFilterInput>>;
  data?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  notificationObject?: InputMaybe<NotificationObjectFilterInput>;
  or?: InputMaybe<Array<NotificationObjectDataFilterInput>>;
};

export type NotificationObjectFilterInput = {
  and?: InputMaybe<Array<NotificationObjectFilterInput>>;
  data?: InputMaybe<ListFilterInputTypeOfNotificationObjectDataFilterInput>;
  directObjectNotification?: InputMaybe<NotificationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  indirectObjectNotification?: InputMaybe<NotificationFilterInput>;
  key?: InputMaybe<UuidOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<NotificationObjectFilterInput>>;
  prepositionalObjectNotification?: InputMaybe<NotificationFilterInput>;
  subjectNotification?: InputMaybe<NotificationFilterInput>;
  type?: InputMaybe<NotificationObjectTypeOperationFilterInput>;
};

export type NotificationObjectSortInput = {
  directObjectNotification?: InputMaybe<NotificationSortInput>;
  id?: InputMaybe<SortEnumType>;
  indirectObjectNotification?: InputMaybe<NotificationSortInput>;
  key?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  prepositionalObjectNotification?: InputMaybe<NotificationSortInput>;
  subjectNotification?: InputMaybe<NotificationSortInput>;
  type?: InputMaybe<SortEnumType>;
};

export enum NotificationObjectType {
  Default = 'DEFAULT',
  Payment = 'PAYMENT',
  SampleRun = 'SAMPLE_RUN'
}

export type NotificationObjectTypeOperationFilterInput = {
  eq?: InputMaybe<NotificationObjectType>;
  in?: InputMaybe<Array<NotificationObjectType>>;
  neq?: InputMaybe<NotificationObjectType>;
  nin?: InputMaybe<Array<NotificationObjectType>>;
};

export type NotificationSortInput = {
  action?: InputMaybe<SortEnumType>;
  directObject?: InputMaybe<NotificationObjectSortInput>;
  id?: InputMaybe<SortEnumType>;
  indirectObject?: InputMaybe<NotificationObjectSortInput>;
  key?: InputMaybe<SortEnumType>;
  path?: InputMaybe<SortEnumType>;
  prepositionalObject?: InputMaybe<NotificationObjectSortInput>;
  timestamp?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type NotificationsConnection = {
  __typename?: 'NotificationsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<NotificationsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Notification>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type NotificationsEdge = {
  __typename?: 'NotificationsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Notification;
};

export type NullableOfClassifierOperationFilterInput = {
  eq?: InputMaybe<Classifier>;
  in?: InputMaybe<Array<InputMaybe<Classifier>>>;
  neq?: InputMaybe<Classifier>;
  nin?: InputMaybe<Array<InputMaybe<Classifier>>>;
};

export type NullableOfInvoiceStatusOperationFilterInput = {
  eq?: InputMaybe<InvoiceStatus>;
  in?: InputMaybe<Array<InputMaybe<InvoiceStatus>>>;
  neq?: InputMaybe<InvoiceStatus>;
  nin?: InputMaybe<Array<InputMaybe<InvoiceStatus>>>;
};

export type Package = {
  __typename?: 'Package';
  basicValue: Scalars['Long']['output'];
  content: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  payments: Array<Payment>;
  subValue?: Maybe<Scalars['Long']['output']>;
};

export type PackageFilterInput = {
  and?: InputMaybe<Array<PackageFilterInput>>;
  basicValue?: InputMaybe<LongOperationFilterInput>;
  content?: InputMaybe<StringOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PackageFilterInput>>;
  payments?: InputMaybe<ListFilterInputTypeOfPaymentFilterInput>;
  subValue?: InputMaybe<LongOperationFilterInput>;
};

export type PackageSortInput = {
  basicValue?: InputMaybe<SortEnumType>;
  content?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  subValue?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PackagesConnection = {
  __typename?: 'PackagesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PackagesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Package>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PackagesEdge = {
  __typename?: 'PackagesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Package;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Payment = {
  __typename?: 'Payment';
  customerId: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  invoiceId?: Maybe<Scalars['String']['output']>;
  package: Package;
  packageId: Scalars['String']['output'];
  quantitySubValue?: Maybe<Scalars['Long']['output']>;
  status?: Maybe<InvoiceStatus>;
  subscriptionId: Scalars['String']['output'];
  tenant: AppTenantInfo;
  tenantId: Scalars['String']['output'];
  totalValue: Scalars['Long']['output'];
};

export type PaymentFilterInput = {
  and?: InputMaybe<Array<PaymentFilterInput>>;
  customerId?: InputMaybe<StringOperationFilterInput>;
  date?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  invoiceId?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PaymentFilterInput>>;
  package?: InputMaybe<PackageFilterInput>;
  packageId?: InputMaybe<StringOperationFilterInput>;
  quantitySubValue?: InputMaybe<LongOperationFilterInput>;
  status?: InputMaybe<NullableOfInvoiceStatusOperationFilterInput>;
  subscriptionId?: InputMaybe<StringOperationFilterInput>;
  tenant?: InputMaybe<AppTenantInfoFilterInput>;
  tenantId?: InputMaybe<StringOperationFilterInput>;
  totalValue?: InputMaybe<LongOperationFilterInput>;
};

export type PaymentIntentPayload = {
  __typename?: 'PaymentIntentPayload';
  clientSecretKey: Scalars['String']['output'];
  paymentIntent: Scalars['String']['output'];
  pubKey: Scalars['String']['output'];
};

export type PaymentSortInput = {
  customerId?: InputMaybe<SortEnumType>;
  date?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  invoiceId?: InputMaybe<SortEnumType>;
  package?: InputMaybe<PackageSortInput>;
  packageId?: InputMaybe<SortEnumType>;
  quantitySubValue?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  subscriptionId?: InputMaybe<SortEnumType>;
  tenant?: InputMaybe<AppTenantInfoSortInput>;
  tenantId?: InputMaybe<SortEnumType>;
  totalValue?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type PaymentTenantsConnection = {
  __typename?: 'PaymentTenantsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PaymentTenantsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Payment>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PaymentTenantsEdge = {
  __typename?: 'PaymentTenantsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Payment;
};

/** A connection to a list of items. */
export type PaymentsConnection = {
  __typename?: 'PaymentsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PaymentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Payment>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type PaymentsEdge = {
  __typename?: 'PaymentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Payment;
};

export type Permission = {
  __typename?: 'Permission';
  action: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  resource: Scalars['String']['output'];
  role: Role;
};

export type PermissionFilterInput = {
  action?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<PermissionFilterInput>>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<PermissionFilterInput>>;
  resource?: InputMaybe<StringOperationFilterInput>;
  role?: InputMaybe<RoleFilterInput>;
};

export enum PlanType {
  Free = 'FREE',
  Pricing6Month = 'PRICING6_MONTH',
  PricingMonth = 'PRICING_MONTH',
  PricingYear = 'PRICING_YEAR'
}

export type PreSignUrlPayload = {
  __typename?: 'PreSignUrlPayload';
  expires: Scalars['DateTime']['output'];
  fileName: Scalars['String']['output'];
  identifier: Scalars['UUID']['output'];
  url: Scalars['String']['output'];
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  notes: Array<Note>;
  numberOfSamples: Scalars['Long']['output'];
  owner: User;
  samples: Array<Sample>;
};

export type ProjectFilterInput = {
  and?: InputMaybe<Array<ProjectFilterInput>>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  deletedAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<ListFilterInputTypeOfNoteFilterInput>;
  or?: InputMaybe<Array<ProjectFilterInput>>;
  owner?: InputMaybe<UserFilterInput>;
  samples?: InputMaybe<ListFilterInputTypeOfSampleFilterInput>;
};

export type ProjectSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  deletedAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  owner?: InputMaybe<UserSortInput>;
};

/** A connection to a list of items. */
export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProjectsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Project>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ProjectsEdge = {
  __typename?: 'ProjectsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Project;
};

export type Query = {
  __typename?: 'Query';
  analyses?: Maybe<AnalysesConnection>;
  analysis?: Maybe<Analysis>;
  label?: Maybe<Label>;
  labelTypes?: Maybe<LabelTypesConnection>;
  labels?: Maybe<LabelsConnection>;
  mail?: Maybe<Mail>;
  mails?: Maybe<MailsConnection>;
  note?: Maybe<Note>;
  notes?: Maybe<NotesConnection>;
  notification?: Maybe<Notification>;
  notifications?: Maybe<NotificationsConnection>;
  packages?: Maybe<PackagesConnection>;
  payment?: Maybe<Payment>;
  paymentTenant?: Maybe<Payment>;
  paymentTenants?: Maybe<PaymentTenantsConnection>;
  payments?: Maybe<PaymentsConnection>;
  profile?: Maybe<User>;
  profileTenant?: Maybe<UserTenant>;
  project?: Maybe<Project>;
  projects?: Maybe<ProjectsConnection>;
  role?: Maybe<Role>;
  roles?: Maybe<RolesConnection>;
  sample?: Maybe<Sample>;
  sampleRun?: Maybe<SampleRun>;
  sampleRuns?: Maybe<SampleRunsConnection>;
  samples?: Maybe<SamplesConnection>;
  tenant?: Maybe<TenantPayload>;
  tenantInfo?: Maybe<TenantPayload>;
  tenants: Array<TenantPayload>;
  ticket?: Maybe<Ticket>;
  ticketTenant?: Maybe<Ticket>;
  ticketTenants?: Maybe<TicketTenantsConnection>;
  tickets?: Maybe<TicketsConnection>;
  totalUnreadNotifications: Scalars['Int']['output'];
  user?: Maybe<User>;
  users?: Maybe<UsersConnection>;
  weatherForecast: Array<WeatherForecast>;
};


export type QueryAnalysesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<AnalysisSortInput>>;
  where?: InputMaybe<AnalysisFilterInput>;
};


export type QueryAnalysisArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryLabelArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryLabelTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StringOperationFilterInput>;
};


export type QueryLabelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<LabelSortInput>>;
  where?: InputMaybe<LabelFilterInput>;
};


export type QueryMailArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryMailsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<MailSortInput>>;
  where?: InputMaybe<MailFilterInput>;
};


export type QueryNoteArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<NoteSortInput>>;
  where?: InputMaybe<NoteFilterInput>;
};


export type QueryNotificationArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<NotificationSortInput>>;
  where?: InputMaybe<NotificationFilterInput>;
};


export type QueryPackagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PackageSortInput>>;
  where?: InputMaybe<PackageFilterInput>;
};


export type QueryPaymentArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryPaymentTenantArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryPaymentTenantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PaymentSortInput>>;
  where?: InputMaybe<PaymentFilterInput>;
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<PaymentSortInput>>;
  where?: InputMaybe<PaymentFilterInput>;
};


export type QueryProjectArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ProjectSortInput>>;
  where?: InputMaybe<ProjectFilterInput>;
};


export type QueryRoleArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<RoleSortInput>>;
  where?: InputMaybe<RoleFilterInput>;
};


export type QuerySampleArgs = {
  id: Scalars['UUID']['input'];
};


export type QuerySampleRunArgs = {
  id: Scalars['UUID']['input'];
};


export type QuerySampleRunsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<SampleRunSortInput>>;
  where?: InputMaybe<SampleRunFilterInput>;
};


export type QuerySamplesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<SampleSortInput>>;
  where?: InputMaybe<SampleFilterInput>;
};


export type QueryTenantArgs = {
  id: Scalars['String']['input'];
};


export type QueryTenantsArgs = {
  order?: InputMaybe<Array<TenantPayloadSortInput>>;
  where?: InputMaybe<TenantPayloadFilterInput>;
};


export type QueryTicketArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryTicketTenantArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryTicketTenantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<TicketSortInput>>;
  where?: InputMaybe<TicketFilterInput>;
};


export type QueryTicketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<TicketSortInput>>;
  where?: InputMaybe<TicketFilterInput>;
};


export type QueryUserArgs = {
  userId: Scalars['UUID']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<UserSortInput>>;
  where?: InputMaybe<UserFilterInput>;
};

export type RefreshTokenInput = {
  refreshToken: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isSystemDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Permission>;
  userRoles: Array<UserRole>;
};

export type RoleFilterInput = {
  and?: InputMaybe<Array<RoleFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  isSystemDefault?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<RoleFilterInput>>;
  permissions?: InputMaybe<ListFilterInputTypeOfPermissionFilterInput>;
  userRoles?: InputMaybe<ListFilterInputTypeOfUserRoleFilterInput>;
};

export type RoleSortInput = {
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isSystemDefault?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type RolesConnection = {
  __typename?: 'RolesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<RolesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Role>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RolesEdge = {
  __typename?: 'RolesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Role;
};

export type Sample = {
  __typename?: 'Sample';
  date: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  extraEndsTrim?: Maybe<Scalars['Float']['output']>;
  id: Scalars['UUID']['output'];
  inputAttachments: Array<Attachment>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  maxNumReads?: Maybe<Scalars['Float']['output']>;
  maxReadLength?: Maybe<Scalars['Float']['output']>;
  minQuantity?: Maybe<Scalars['Float']['output']>;
  minReadLength?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  notes?: Maybe<NotesConnection>;
  owner: User;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['UUID']['output']>;
  sampleLabels: Array<SampleLabel>;
  sampleRuns: Array<SampleRun>;
  status: SampleStatus;
  type?: Maybe<Scalars['String']['output']>;
};


export type SampleNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<NoteSortInput>>;
  where?: InputMaybe<NoteFilterInput>;
};

export type SampleFilterInput = {
  and?: InputMaybe<Array<SampleFilterInput>>;
  date?: InputMaybe<DateTimeOperationFilterInput>;
  deletedAt?: InputMaybe<DateTimeOperationFilterInput>;
  extraEndsTrim?: InputMaybe<FloatOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  inputAttachments?: InputMaybe<ListFilterInputTypeOfAttachmentFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  maxNumReads?: InputMaybe<FloatOperationFilterInput>;
  maxReadLength?: InputMaybe<FloatOperationFilterInput>;
  minQuantity?: InputMaybe<FloatOperationFilterInput>;
  minReadLength?: InputMaybe<FloatOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<ListFilterInputTypeOfNoteFilterInput>;
  or?: InputMaybe<Array<SampleFilterInput>>;
  owner?: InputMaybe<UserFilterInput>;
  project?: InputMaybe<ProjectFilterInput>;
  projectId?: InputMaybe<UuidOperationFilterInput>;
  sampleLabels?: InputMaybe<ListFilterInputTypeOfSampleLabelFilterInput>;
  sampleRuns?: InputMaybe<ListFilterInputTypeOfSampleRunFilterInput>;
  status?: InputMaybe<SampleStatusOperationFilterInput>;
  type?: InputMaybe<StringOperationFilterInput>;
};

export type SampleLabel = {
  __typename?: 'SampleLabel';
  label: Label;
  labelId: Scalars['UUID']['output'];
};

export type SampleLabelFilterInput = {
  and?: InputMaybe<Array<SampleLabelFilterInput>>;
  label?: InputMaybe<LabelFilterInput>;
  labelId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<SampleLabelFilterInput>>;
};

export type SampleLabelSortInput = {
  label?: InputMaybe<LabelSortInput>;
  labelId?: InputMaybe<SortEnumType>;
};

export type SampleRun = {
  __typename?: 'SampleRun';
  analysis?: Maybe<Analysis>;
  appVersion?: Maybe<Scalars['String']['output']>;
  checkM2Threads?: Maybe<Scalars['Float']['output']>;
  children: Array<SampleRun>;
  classifier?: Maybe<Classifier>;
  clusteringSimilarityThreshold?: Maybe<Scalars['Float']['output']>;
  completenessAwareMinCompleteness?: Maybe<Scalars['Float']['output']>;
  completenessAwareMinLength?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dastoolScoreThreshold?: Maybe<Scalars['Float']['output']>;
  dastoolSearch?: Maybe<Scalars['String']['output']>;
  dastoolThreads?: Maybe<Scalars['Float']['output']>;
  dbSequence?: Maybe<Scalars['String']['output']>;
  dbTaxonomy?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['TimeSpan']['output']>;
  exportUnassignedRead?: Maybe<Scalars['Boolean']['output']>;
  fastaQuery?: Maybe<Scalars['String']['output']>;
  filtersMaxContamination?: Maybe<Scalars['Float']['output']>;
  filtersMaxContigs?: Maybe<Scalars['Float']['output']>;
  filtersMinCompleteness?: Maybe<Scalars['Float']['output']>;
  genomeSize?: Maybe<Scalars['Float']['output']>;
  gtdbtkThreads?: Maybe<Scalars['Float']['output']>;
  id: Scalars['UUID']['output'];
  isClustered?: Maybe<Scalars['Boolean']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  kraken2Db?: Maybe<Scalars['String']['output']>;
  log?: Maybe<Scalars['String']['output']>;
  longReadsLibrary?: Maybe<Scalars['String']['output']>;
  maxAccepts?: Maybe<Scalars['Float']['output']>;
  metaBatMinContigSize?: Maybe<Scalars['Float']['output']>;
  metaBatThreads?: Maybe<Scalars['Float']['output']>;
  minIdThreshold?: Maybe<Scalars['Float']['output']>;
  minQueryCoverage?: Maybe<Scalars['Float']['output']>;
  minimapThreads?: Maybe<Scalars['Float']['output']>;
  notes?: Maybe<NotesConnection>;
  numberOfReadsSubSampled?: Maybe<Scalars['Float']['output']>;
  numberOfThreads?: Maybe<Scalars['Float']['output']>;
  outputAttachments: Array<Attachment>;
  pacbioAnnotationSamples: Array<SampleRunParam>;
  pacbioAssemble?: Maybe<Scalars['String']['output']>;
  pacbioSample?: Maybe<Scalars['String']['output']>;
  pairedEndShortReadsLibrary?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<SampleRun>;
  queryToSearch?: Maybe<Scalars['String']['output']>;
  resultFolder?: Maybe<Scalars['String']['output']>;
  sample: Sample;
  semibinModel?: Maybe<Scalars['String']['output']>;
  semibinThreads?: Maybe<Scalars['Float']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status: SampleRunStatus;
  type?: Maybe<Scalars['String']['output']>;
  unpairedShortReadsLibrary?: Maybe<Scalars['String']['output']>;
  workFolder?: Maybe<Scalars['String']['output']>;
};


export type SampleRunNotesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<NoteSortInput>>;
  where?: InputMaybe<NoteFilterInput>;
};

export type SampleRunFilterInput = {
  analysis?: InputMaybe<AnalysisFilterInput>;
  and?: InputMaybe<Array<SampleRunFilterInput>>;
  appVersion?: InputMaybe<StringOperationFilterInput>;
  checkM2Threads?: InputMaybe<FloatOperationFilterInput>;
  children?: InputMaybe<ListFilterInputTypeOfSampleRunFilterInput>;
  classifier?: InputMaybe<NullableOfClassifierOperationFilterInput>;
  clusteringSimilarityThreshold?: InputMaybe<FloatOperationFilterInput>;
  completenessAwareMinCompleteness?: InputMaybe<FloatOperationFilterInput>;
  completenessAwareMinLength?: InputMaybe<FloatOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  dastoolScoreThreshold?: InputMaybe<FloatOperationFilterInput>;
  dastoolSearch?: InputMaybe<StringOperationFilterInput>;
  dastoolThreads?: InputMaybe<FloatOperationFilterInput>;
  dbSequence?: InputMaybe<StringOperationFilterInput>;
  dbTaxonomy?: InputMaybe<StringOperationFilterInput>;
  deletedAt?: InputMaybe<DateTimeOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  duration?: InputMaybe<TimeSpanOperationFilterInput>;
  exportUnassignedRead?: InputMaybe<BooleanOperationFilterInput>;
  fastaQuery?: InputMaybe<StringOperationFilterInput>;
  filtersMaxContamination?: InputMaybe<FloatOperationFilterInput>;
  filtersMaxContigs?: InputMaybe<FloatOperationFilterInput>;
  filtersMinCompleteness?: InputMaybe<FloatOperationFilterInput>;
  genomeSize?: InputMaybe<FloatOperationFilterInput>;
  gtdbtkThreads?: InputMaybe<FloatOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  isClustered?: InputMaybe<BooleanOperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  kraken2Db?: InputMaybe<StringOperationFilterInput>;
  log?: InputMaybe<StringOperationFilterInput>;
  longReadsLibrary?: InputMaybe<StringOperationFilterInput>;
  maxAccepts?: InputMaybe<FloatOperationFilterInput>;
  metaBatMinContigSize?: InputMaybe<FloatOperationFilterInput>;
  metaBatThreads?: InputMaybe<FloatOperationFilterInput>;
  minIdThreshold?: InputMaybe<FloatOperationFilterInput>;
  minQueryCoverage?: InputMaybe<FloatOperationFilterInput>;
  minimapThreads?: InputMaybe<FloatOperationFilterInput>;
  notes?: InputMaybe<ListFilterInputTypeOfNoteFilterInput>;
  numberOfReadsSubSampled?: InputMaybe<FloatOperationFilterInput>;
  numberOfThreads?: InputMaybe<FloatOperationFilterInput>;
  or?: InputMaybe<Array<SampleRunFilterInput>>;
  outputAttachments?: InputMaybe<ListFilterInputTypeOfAttachmentFilterInput>;
  pacbioAnnotationSamples?: InputMaybe<ListFilterInputTypeOfSampleRunParamFilterInput>;
  pacbioAssemble?: InputMaybe<StringOperationFilterInput>;
  pacbioSample?: InputMaybe<StringOperationFilterInput>;
  pairedEndShortReadsLibrary?: InputMaybe<StringOperationFilterInput>;
  parent?: InputMaybe<SampleRunFilterInput>;
  queryToSearch?: InputMaybe<StringOperationFilterInput>;
  resultFolder?: InputMaybe<StringOperationFilterInput>;
  sample?: InputMaybe<SampleFilterInput>;
  semibinModel?: InputMaybe<StringOperationFilterInput>;
  semibinThreads?: InputMaybe<FloatOperationFilterInput>;
  startedAt?: InputMaybe<DateTimeOperationFilterInput>;
  status?: InputMaybe<SampleRunStatusOperationFilterInput>;
  type?: InputMaybe<StringOperationFilterInput>;
  unpairedShortReadsLibrary?: InputMaybe<StringOperationFilterInput>;
  workFolder?: InputMaybe<StringOperationFilterInput>;
};

export type SampleRunParam = {
  __typename?: 'SampleRunParam';
  id: Scalars['UUID']['output'];
  param: Scalars['String']['output'];
  sampleRun: SampleRun;
  sampleRunId: Scalars['UUID']['output'];
};

export type SampleRunParamFilterInput = {
  and?: InputMaybe<Array<SampleRunParamFilterInput>>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<SampleRunParamFilterInput>>;
  param?: InputMaybe<StringOperationFilterInput>;
  sampleRun?: InputMaybe<SampleRunFilterInput>;
  sampleRunId?: InputMaybe<UuidOperationFilterInput>;
};

export type SampleRunSortInput = {
  analysis?: InputMaybe<AnalysisSortInput>;
  appVersion?: InputMaybe<SortEnumType>;
  checkM2Threads?: InputMaybe<SortEnumType>;
  classifier?: InputMaybe<SortEnumType>;
  clusteringSimilarityThreshold?: InputMaybe<SortEnumType>;
  completenessAwareMinCompleteness?: InputMaybe<SortEnumType>;
  completenessAwareMinLength?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  dastoolScoreThreshold?: InputMaybe<SortEnumType>;
  dastoolSearch?: InputMaybe<SortEnumType>;
  dastoolThreads?: InputMaybe<SortEnumType>;
  dbSequence?: InputMaybe<SortEnumType>;
  dbTaxonomy?: InputMaybe<SortEnumType>;
  deletedAt?: InputMaybe<SortEnumType>;
  description?: InputMaybe<SortEnumType>;
  duration?: InputMaybe<SortEnumType>;
  exportUnassignedRead?: InputMaybe<SortEnumType>;
  fastaQuery?: InputMaybe<SortEnumType>;
  filtersMaxContamination?: InputMaybe<SortEnumType>;
  filtersMaxContigs?: InputMaybe<SortEnumType>;
  filtersMinCompleteness?: InputMaybe<SortEnumType>;
  genomeSize?: InputMaybe<SortEnumType>;
  gtdbtkThreads?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isClustered?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  kraken2Db?: InputMaybe<SortEnumType>;
  log?: InputMaybe<SortEnumType>;
  longReadsLibrary?: InputMaybe<SortEnumType>;
  maxAccepts?: InputMaybe<SortEnumType>;
  metaBatMinContigSize?: InputMaybe<SortEnumType>;
  metaBatThreads?: InputMaybe<SortEnumType>;
  minIdThreshold?: InputMaybe<SortEnumType>;
  minQueryCoverage?: InputMaybe<SortEnumType>;
  minimapThreads?: InputMaybe<SortEnumType>;
  numberOfReadsSubSampled?: InputMaybe<SortEnumType>;
  numberOfThreads?: InputMaybe<SortEnumType>;
  pacbioAssemble?: InputMaybe<SortEnumType>;
  pacbioSample?: InputMaybe<SortEnumType>;
  pairedEndShortReadsLibrary?: InputMaybe<SortEnumType>;
  parent?: InputMaybe<SampleRunSortInput>;
  queryToSearch?: InputMaybe<SortEnumType>;
  resultFolder?: InputMaybe<SortEnumType>;
  sample?: InputMaybe<SampleSortInput>;
  semibinModel?: InputMaybe<SortEnumType>;
  semibinThreads?: InputMaybe<SortEnumType>;
  startedAt?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
  unpairedShortReadsLibrary?: InputMaybe<SortEnumType>;
  workFolder?: InputMaybe<SortEnumType>;
};

export enum SampleRunStatus {
  Failed = 'FAILED',
  NotSynced = 'NOT_SYNCED',
  Running = 'RUNNING',
  Successful = 'SUCCESSFUL',
  Waiting = 'WAITING'
}

export type SampleRunStatusOperationFilterInput = {
  eq?: InputMaybe<SampleRunStatus>;
  in?: InputMaybe<Array<SampleRunStatus>>;
  neq?: InputMaybe<SampleRunStatus>;
  nin?: InputMaybe<Array<SampleRunStatus>>;
};

/** A connection to a list of items. */
export type SampleRunsConnection = {
  __typename?: 'SampleRunsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<SampleRunsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<SampleRun>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type SampleRunsEdge = {
  __typename?: 'SampleRunsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SampleRun;
};

export type SampleSortInput = {
  date?: InputMaybe<SortEnumType>;
  deletedAt?: InputMaybe<SortEnumType>;
  extraEndsTrim?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDeleted?: InputMaybe<SortEnumType>;
  maxNumReads?: InputMaybe<SortEnumType>;
  maxReadLength?: InputMaybe<SortEnumType>;
  minQuantity?: InputMaybe<SortEnumType>;
  minReadLength?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  owner?: InputMaybe<UserSortInput>;
  project?: InputMaybe<ProjectSortInput>;
  projectId?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
};

export enum SampleStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Successful = 'SUCCESSFUL'
}

export type SampleStatusOperationFilterInput = {
  eq?: InputMaybe<SampleStatus>;
  in?: InputMaybe<Array<SampleStatus>>;
  neq?: InputMaybe<SampleStatus>;
  nin?: InputMaybe<Array<SampleStatus>>;
};

/** A connection to a list of items. */
export type SamplesConnection = {
  __typename?: 'SamplesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<SamplesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Sample>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type SamplesEdge = {
  __typename?: 'SamplesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Sample;
};

export type SignUpInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender: Gender;
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type SignUpTenantInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender: Gender;
  identifier: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  sizeData?: InputMaybe<Scalars['Long']['input']>;
  tenantName: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
  type: PlanType;
  username: Scalars['String']['input'];
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SubscribeResponse = {
  __typename?: 'SubscribeResponse';
  pubKey: Scalars['String']['output'];
  subscribe: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  noteProjectSubscription: Note;
  noteSampleRunSubscription: Note;
  noteSampleSubscription: Note;
  notificationAdded: Notification;
  notificationDynamic: Notification;
};


export type SubscriptionNoteProjectSubscriptionArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionNoteSampleRunSubscriptionArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionNoteSampleSubscriptionArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionNotificationDynamicArgs = {
  id: Scalars['String']['input'];
};

export type TenantPayload = {
  __typename?: 'TenantPayload';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  maximumGiga?: Maybe<Scalars['Long']['output']>;
  name: Scalars['String']['output'];
  s3Size: Scalars['Long']['output'];
  validUpto: Scalars['DateTime']['output'];
};

export type TenantPayloadFilterInput = {
  and?: InputMaybe<Array<TenantPayloadFilterInput>>;
  email?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  identifier?: InputMaybe<StringOperationFilterInput>;
  isActive?: InputMaybe<BooleanOperationFilterInput>;
  maximumGiga?: InputMaybe<LongOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TenantPayloadFilterInput>>;
  s3Size?: InputMaybe<LongOperationFilterInput>;
  validUpto?: InputMaybe<DateTimeOperationFilterInput>;
};

export type TenantPayloadSortInput = {
  email?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  identifier?: InputMaybe<SortEnumType>;
  isActive?: InputMaybe<SortEnumType>;
  maximumGiga?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  s3Size?: InputMaybe<SortEnumType>;
  validUpto?: InputMaybe<SortEnumType>;
};

export type Ticket = {
  __typename?: 'Ticket';
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  status: TicketStatus;
  tenantIdentifier: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

export type TicketFilterInput = {
  and?: InputMaybe<Array<TicketFilterInput>>;
  closedAt?: InputMaybe<DateTimeOperationFilterInput>;
  content?: InputMaybe<StringOperationFilterInput>;
  createdAt?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  note?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<TicketFilterInput>>;
  status?: InputMaybe<TicketStatusOperationFilterInput>;
  tenantIdentifier?: InputMaybe<StringOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  type?: InputMaybe<StringOperationFilterInput>;
  userId?: InputMaybe<UuidOperationFilterInput>;
};

export type TicketSortInput = {
  closedAt?: InputMaybe<SortEnumType>;
  content?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  note?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  tenantIdentifier?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
  userId?: InputMaybe<SortEnumType>;
};

export enum TicketStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Solving = 'SOLVING'
}

export type TicketStatusOperationFilterInput = {
  eq?: InputMaybe<TicketStatus>;
  in?: InputMaybe<Array<TicketStatus>>;
  neq?: InputMaybe<TicketStatus>;
  nin?: InputMaybe<Array<TicketStatus>>;
};

/** A connection to a list of items. */
export type TicketTenantsConnection = {
  __typename?: 'TicketTenantsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<TicketTenantsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Ticket>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type TicketTenantsEdge = {
  __typename?: 'TicketTenantsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Ticket;
};

/** A connection to a list of items. */
export type TicketsConnection = {
  __typename?: 'TicketsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<TicketsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Ticket>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type TicketsEdge = {
  __typename?: 'TicketsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Ticket;
};

export type TimeSpanOperationFilterInput = {
  eq?: InputMaybe<Scalars['TimeSpan']['input']>;
  gt?: InputMaybe<Scalars['TimeSpan']['input']>;
  gte?: InputMaybe<Scalars['TimeSpan']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['TimeSpan']['input']>>>;
  lt?: InputMaybe<Scalars['TimeSpan']['input']>;
  lte?: InputMaybe<Scalars['TimeSpan']['input']>;
  neq?: InputMaybe<Scalars['TimeSpan']['input']>;
  ngt?: InputMaybe<Scalars['TimeSpan']['input']>;
  ngte?: InputMaybe<Scalars['TimeSpan']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['TimeSpan']['input']>>>;
  nlt?: InputMaybe<Scalars['TimeSpan']['input']>;
  nlte?: InputMaybe<Scalars['TimeSpan']['input']>;
};

export type UpdateAnalysisInput = {
  attachments?: InputMaybe<Array<AttachmentInput>>;
  author?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['DateTime']['input']>;
  gitUrl?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<AttachmentInput>;
  id: Scalars['UUID']['input'];
  includedSequences?: InputMaybe<Scalars['String']['input']>;
  inputs?: InputMaybe<Array<AnalysisInfoInput>>;
  longestSequence?: InputMaybe<Scalars['Float']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  moduleCommit?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  numberOfSequences?: InputMaybe<Scalars['Float']['input']>;
  outputs?: InputMaybe<Array<AnalysisInfoInput>>;
  overview?: InputMaybe<Scalars['String']['input']>;
  parameters?: InputMaybe<Array<AnalysisInfoInput>>;
  relatedPublications?: InputMaybe<Array<AnalysisPublicationInput>>;
  sdk?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  totalBases?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateLabelInput = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNoteInput = {
  attachments?: InputMaybe<Array<AttachmentInput>>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

export type UpdateProfileInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<AttachmentInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  emailAppPassword?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSampleInput = {
  extraEndsTrim?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['UUID']['input'];
  inputAttachments?: InputMaybe<Array<AttachmentInput>>;
  labels?: InputMaybe<Array<Scalars['UUID']['input']>>;
  maxNumReads?: InputMaybe<Scalars['Float']['input']>;
  maxReadLength?: InputMaybe<Scalars['Float']['input']>;
  minQuantity?: InputMaybe<Scalars['Float']['input']>;
  minReadLength?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<SampleStatus>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSampleRunInput = {
  appVersion?: InputMaybe<Scalars['String']['input']>;
  checkM2Threads?: InputMaybe<Scalars['Float']['input']>;
  classifier?: InputMaybe<Classifier>;
  clusteringSimilarityThreshold?: InputMaybe<Scalars['Float']['input']>;
  completenessAwareMinCompleteness?: InputMaybe<Scalars['Float']['input']>;
  completenessAwareMinLength?: InputMaybe<Scalars['Float']['input']>;
  dastoolScoreThreshold?: InputMaybe<Scalars['Float']['input']>;
  dastoolSearch?: InputMaybe<Scalars['String']['input']>;
  dastoolThreads?: InputMaybe<Scalars['Float']['input']>;
  dbSequence?: InputMaybe<Scalars['String']['input']>;
  dbTaxonomy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exportUnassignedRead?: InputMaybe<Scalars['Boolean']['input']>;
  fastaQuery?: InputMaybe<Scalars['String']['input']>;
  filtersMaxContamination?: InputMaybe<Scalars['Float']['input']>;
  filtersMaxContigs?: InputMaybe<Scalars['Float']['input']>;
  filtersMinCompleteness?: InputMaybe<Scalars['Float']['input']>;
  genomeSize?: InputMaybe<Scalars['Float']['input']>;
  gtdbtkThreads?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['UUID']['input'];
  isClustered?: InputMaybe<Scalars['Boolean']['input']>;
  kraken2Db?: InputMaybe<Scalars['String']['input']>;
  log?: InputMaybe<Scalars['String']['input']>;
  longReadsLibrary?: InputMaybe<Scalars['String']['input']>;
  maxAccepts?: InputMaybe<Scalars['Float']['input']>;
  metaBatMinContigSize?: InputMaybe<Scalars['Float']['input']>;
  metaBatThreads?: InputMaybe<Scalars['Float']['input']>;
  minIdThreshold?: InputMaybe<Scalars['Float']['input']>;
  minQueryCoverage?: InputMaybe<Scalars['Float']['input']>;
  minimapThreads?: InputMaybe<Scalars['Float']['input']>;
  numberOfReadsSubSampled?: InputMaybe<Scalars['Float']['input']>;
  numberOfThreads?: InputMaybe<Scalars['Float']['input']>;
  outputAttachments?: InputMaybe<Array<AttachmentInput>>;
  pacbioAnnotationSamples?: InputMaybe<Array<Scalars['String']['input']>>;
  pacbioAssemble?: InputMaybe<Scalars['String']['input']>;
  pacbioSample?: InputMaybe<Scalars['String']['input']>;
  pairedEndShortReadsLibrary?: InputMaybe<Scalars['String']['input']>;
  queryToSearch?: InputMaybe<Scalars['String']['input']>;
  resultFolder?: InputMaybe<Scalars['String']['input']>;
  semibinModel?: InputMaybe<Scalars['String']['input']>;
  semibinThreads?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpairedShortReadsLibrary?: InputMaybe<Scalars['String']['input']>;
  workFolder?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSampleRunLogInput = {
  id: Scalars['UUID']['input'];
  log?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<AttachmentInput>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  emailAppPassword?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  id: Scalars['UUID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Attachment>;
  dateOfBirth: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  emailAppPassword?: Maybe<Scalars['String']['output']>;
  emailConfirmed: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  gender: Gender;
  id: Scalars['UUID']['output'];
  isDefault: Scalars['Boolean']['output'];
  labels: Array<Label>;
  lastName: Scalars['String']['output'];
  mails: Array<Mail>;
  notes: Array<Note>;
  phoneNumber: Scalars['String']['output'];
  projects: Array<Project>;
  roles: Array<Role>;
  samples: Array<Sample>;
  settings: UserSetting;
  userNotifications: Array<UserNotification>;
  userRoles: Array<UserRole>;
  username: Scalars['String']['output'];
};

export type UserFilterInput = {
  address?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<UserFilterInput>>;
  avatar?: InputMaybe<AttachmentFilterInput>;
  dateOfBirth?: InputMaybe<DateTimeOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  emailAppPassword?: InputMaybe<StringOperationFilterInput>;
  emailConfirmed?: InputMaybe<BooleanOperationFilterInput>;
  firstName?: InputMaybe<StringOperationFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  gender?: InputMaybe<GenderOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  isDefault?: InputMaybe<BooleanOperationFilterInput>;
  labels?: InputMaybe<ListFilterInputTypeOfLabelFilterInput>;
  lastName?: InputMaybe<StringOperationFilterInput>;
  mails?: InputMaybe<ListFilterInputTypeOfMailFilterInput>;
  notes?: InputMaybe<ListFilterInputTypeOfNoteFilterInput>;
  or?: InputMaybe<Array<UserFilterInput>>;
  phoneNumber?: InputMaybe<StringOperationFilterInput>;
  projects?: InputMaybe<ListFilterInputTypeOfProjectFilterInput>;
  samples?: InputMaybe<ListFilterInputTypeOfSampleFilterInput>;
  settings?: InputMaybe<UserSettingFilterInput>;
  userNotifications?: InputMaybe<ListFilterInputTypeOfUserNotificationFilterInput>;
  userRoles?: InputMaybe<ListFilterInputTypeOfUserRoleFilterInput>;
  username?: InputMaybe<StringOperationFilterInput>;
};

export type UserNotification = {
  __typename?: 'UserNotification';
  isRead: Scalars['Boolean']['output'];
  notification: Notification;
  notificationId: Scalars['UUID']['output'];
  user: User;
  userId: Scalars['UUID']['output'];
};

export type UserNotificationFilterInput = {
  and?: InputMaybe<Array<UserNotificationFilterInput>>;
  isRead?: InputMaybe<BooleanOperationFilterInput>;
  notification?: InputMaybe<NotificationFilterInput>;
  notificationId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<UserNotificationFilterInput>>;
  user?: InputMaybe<UserFilterInput>;
  userId?: InputMaybe<UuidOperationFilterInput>;
};

export type UserRole = {
  __typename?: 'UserRole';
  role: Role;
  user: User;
};

export type UserRoleFilterInput = {
  and?: InputMaybe<Array<UserRoleFilterInput>>;
  or?: InputMaybe<Array<UserRoleFilterInput>>;
  role?: InputMaybe<RoleFilterInput>;
  user?: InputMaybe<UserFilterInput>;
};

export type UserSetting = {
  __typename?: 'UserSetting';
  id: Scalars['UUID']['output'];
  user: User;
};

export type UserSettingFilterInput = {
  and?: InputMaybe<Array<UserSettingFilterInput>>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<UserSettingFilterInput>>;
  user?: InputMaybe<UserFilterInput>;
};

export type UserSettingSortInput = {
  id?: InputMaybe<SortEnumType>;
  user?: InputMaybe<UserSortInput>;
};

export type UserSortInput = {
  address?: InputMaybe<SortEnumType>;
  avatar?: InputMaybe<AttachmentSortInput>;
  dateOfBirth?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  emailAppPassword?: InputMaybe<SortEnumType>;
  emailConfirmed?: InputMaybe<SortEnumType>;
  firstName?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  gender?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isDefault?: InputMaybe<SortEnumType>;
  lastName?: InputMaybe<SortEnumType>;
  phoneNumber?: InputMaybe<SortEnumType>;
  settings?: InputMaybe<UserSettingSortInput>;
  username?: InputMaybe<SortEnumType>;
};

export type UserTenant = {
  __typename?: 'UserTenant';
  address?: Maybe<Scalars['String']['output']>;
  dateOfBirth: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  emailAppPassword?: Maybe<Scalars['String']['output']>;
  emailConfirmed: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  gender: Gender;
  id: Scalars['UUID']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<UsersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
  ngt?: InputMaybe<Scalars['UUID']['input']>;
  ngte?: InputMaybe<Scalars['UUID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  nlt?: InputMaybe<Scalars['UUID']['input']>;
  nlte?: InputMaybe<Scalars['UUID']['input']>;
};

export type WeatherForecast = {
  __typename?: 'WeatherForecast';
  date: Scalars['DateTime']['output'];
  summary?: Maybe<Scalars['String']['output']>;
  temperatureC: Scalars['Int']['output'];
  temperatureF: Scalars['Int']['output'];
};

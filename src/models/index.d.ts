import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerProject = {
  readonly id: string;
  readonly name?: string | null;
  readonly photo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly id: string;
  readonly name?: string | null;
  readonly photo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project, ProjectMetaData>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}
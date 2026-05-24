import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  integer,
  boolean,
} from 'drizzle-orm/pg-core'

// 회원사 (Member Organizations)
export const members = pgTable('members', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  businessType: varchar('business_type', { length: 50 }).notNull(), // 업종 (예: 타일, 창호, 철물 등)
  description: text('description'),
  phone: varchar('phone', { length: 20 }),
  address: text('address'),
  representativeName: varchar('representative_name', { length: 50 }),
  isActive: boolean('is_active').default(true).notNull(),
  joinedAt: timestamp('joined_at').defaultNow().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type Member = typeof members.$inferSelect
export type NewMember = typeof members.$inferInsert

// 게시판 카테고리
export type BoardCategory = 'notice' | 'free' | 'qna'

// 게시글
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  category: varchar('category', { length: 20 }).notNull().$type<BoardCategory>(),
  title: varchar('title', { length: 200 }).notNull(),
  content: text('content').notNull(),
  authorName: varchar('author_name', { length: 50 }).notNull(),
  viewCount: integer('view_count').default(0).notNull(),
  isPinned: boolean('is_pinned').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export type Post = typeof posts.$inferSelect
export type NewPost = typeof posts.$inferInsert

// 이벤트/행사
export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 200 }).notNull(),
  description: text('description'),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date'),
  location: varchar('location', { length: 200 }),
  isPublished: boolean('is_published').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export type Event = typeof events.$inferSelect
export type NewEvent = typeof events.$inferInsert

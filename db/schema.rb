# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_210_305_030_844) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'action_text_rich_texts', force: :cascade do |t|
    t.string 'name', null: false
    t.text 'body'
    t.string 'record_type', null: false
    t.bigint 'record_id', null: false
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index %w[record_type record_id name], name: 'index_action_text_rich_texts_uniqueness', unique: true
  end

  create_table 'active_storage_attachments', force: :cascade do |t|
    t.string 'name', null: false
    t.string 'record_type', null: false
    t.bigint 'record_id', null: false
    t.bigint 'blob_id', null: false
    t.datetime 'created_at', null: false
    t.index ['blob_id'], name: 'index_active_storage_attachments_on_blob_id'
    t.index %w[record_type record_id name blob_id], name: 'index_active_storage_attachments_uniqueness', unique: true
  end

  create_table 'active_storage_blobs', force: :cascade do |t|
    t.string 'key', null: false
    t.string 'filename', null: false
    t.string 'content_type'
    t.text 'metadata'
    t.bigint 'byte_size', null: false
    t.string 'checksum', null: false
    t.datetime 'created_at', null: false
    t.string 'service_name', null: false
    t.index ['key'], name: 'index_active_storage_blobs_on_key', unique: true
  end

  create_table 'active_storage_variant_records', force: :cascade do |t|
    t.bigint 'blob_id', null: false
    t.string 'variation_digest', null: false
    t.index %w[blob_id variation_digest], name: 'index_active_storage_variant_records_uniqueness', unique: true
  end

  create_table 'comments', force: :cascade do |t|
    t.text 'content'
    t.string 'commentable_type'
    t.bigint 'commentable_id'
    t.bigint 'user_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index %w[commentable_type commentable_id], name: 'index_comments_on_commentable_type_and_commentable_id'
    t.index ['user_id'], name: 'index_comments_on_user_id'
  end

  create_table 'posts', force: :cascade do |t|
    t.string 'title'
    t.text 'content'
    t.integer 'word_count'
    t.bigint 'user_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.string 'slug'
    t.boolean 'published', default: false
    t.datetime 'published_at'
    t.index ['published'], name: 'index_posts_on_published'
    t.index %w[user_id created_at], name: 'index_posts_on_user_id_and_created_at'
    t.index ['user_id'], name: 'index_posts_on_user_id'
  end

  create_table 'projects', force: :cascade do |t|
    t.string 'name'
    t.text 'description'
    t.boolean 'external_url', default: false
    t.string 'url'
    t.string 'slug'
    t.bigint 'user_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['slug'], name: 'index_projects_on_slug'
    t.index ['user_id'], name: 'index_projects_on_user_id'
  end

  create_table 'resources', force: :cascade do |t|
    t.string 'caption'
    t.string 'path'
    t.string 'resource_type'
    t.string 'taken_at'
    t.integer 'day'
    t.string 'resourceable_type'
    t.bigint 'resourceable_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index %w[resourceable_type resourceable_id], name: 'index_resources_on_resourceable_type_and_resourceable_id'
  end

  create_table 'taggings', force: :cascade do |t|
    t.bigint 'tag_id'
    t.bigint 'post_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['post_id'], name: 'index_taggings_on_post_id'
    t.index ['tag_id'], name: 'index_taggings_on_tag_id'
  end

  create_table 'tags', force: :cascade do |t|
    t.string 'name'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'users', force: :cascade do |t|
    t.string 'first_name'
    t.string 'last_name'
    t.text 'details'
    t.string 'email'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.string 'password_digest'
    t.string 'remember_digest'
    t.string 'activation_digest'
    t.boolean 'activated', default: false
    t.datetime 'activated_at'
    t.string 'reset_digest'
    t.datetime 'reset_sent_at'
    t.integer 'role'
    t.string 'ip_address'
    t.index ['email'], name: 'index_users_on_email', unique: true
  end

  create_table 'version_associations', force: :cascade do |t|
    t.integer 'version_id'
    t.string 'foreign_key_name', null: false
    t.integer 'foreign_key_id'
    t.string 'foreign_type'
    t.index %w[foreign_key_name foreign_key_id foreign_type], name: 'index_version_associations_on_foreign_key'
    t.index ['version_id'], name: 'index_version_associations_on_version_id'
  end

  create_table 'versions', force: :cascade do |t|
    t.string 'item_type', null: false
    t.bigint 'item_id', null: false
    t.string 'event', null: false
    t.string 'whodunnit'
    t.text 'object'
    t.datetime 'created_at'
    t.text 'object_changes'
    t.integer 'transaction_id'
    t.index %w[item_type item_id], name: 'index_versions_on_item_type_and_item_id'
    t.index ['transaction_id'], name: 'index_versions_on_transaction_id'
  end

  add_foreign_key 'active_storage_attachments', 'active_storage_blobs', column: 'blob_id'
  add_foreign_key 'active_storage_variant_records', 'active_storage_blobs', column: 'blob_id'
  add_foreign_key 'comments', 'users'
  add_foreign_key 'posts', 'users'
  add_foreign_key 'projects', 'users'
  add_foreign_key 'taggings', 'posts'
  add_foreign_key 'taggings', 'tags'
end

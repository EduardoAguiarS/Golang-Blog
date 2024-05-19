package model

type Blog struct {
	ID    uint   `gorm:"primaryKey" json:"id"`
	Title string `json:"title" gorm:"not null;column:title;type:varchar(255)"`
	Body  string `json:"body" gorm:"not null;column:body;type:text"`
	Image string `json:"image" gorm:"column:image;type:text"`
}

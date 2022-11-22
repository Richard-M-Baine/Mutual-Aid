from flask_wtf import FlaskForm
from wtforms.fields import StringField, TextAreaField, IntegerField, BooleanField, SubmitField, DateField, SelectField
from wtforms.validators import DataRequired






class NewGroup(FlaskForm):

    name = StringField('name', validators=[DataRequired()])
    about = TextAreaField('about', validators=[DataRequired()])
    purpose = StringField("purpose", validators=[DataRequired()])
    private = BooleanField()
    submit = SubmitField()